"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dbMain_1 = require("./Db/dbMain");
class ExpressApp {
    constructor(app) {
        this.app = app;
        this.db = new dbMain_1.DB();
    }
    start() { process.env.DEPLOYED ? this.initDeployedApp() : this.initServedApp(); }
    initServedApp() { this.app.listen(8080, () => { this.initDataApi(); console.log("Server running..."); }); }
    ;
    initDeployedApp() {
        this.app.use(express_1.default.static('FE')).listen(8080, () => { console.log("Server running..."); });
        this.app.get(/\/portfolio\/(about-me|skills|jobs|education|references|leave-message)/, (apiRes, apiReq) => {
            apiRes.header('Access-Control-Allow-Origin : http://stage.silviucimpoeru.com/');
            apiReq.sendFile(`${__dirname}/FE/index.html`);
            this.initDataApi();
        });
    }
    initDataApi() {
        this.app.get("/api/", (apiReq, apiRes) => {
            apiRes.header("Access-Control-Allow-Origin", process.env.DEPLOYED ? 'http://stage.silviucimpoeru.com/' : 'http://localhost:4200');
            const dataToFetch = apiReq.query.dataToFetch;
            const locale = apiReq.query.locale;
            const tables = apiReq.query.isInitialLoad ?
                [
                    { Table: 'header_data', Columns: 'text', Where: `WHERE locale=?`, Params: [locale] },
                    { Table: "component_data", Columns: 'text,prefix', Where: `WHERE  locale=? AND string_key LIKE ?`, Params: [locale, `%${dataToFetch}%`] },
                    { Table: 'footer_data', Columns: 'text', Where: `WHERE locale=?`, Params: [locale] }
                ] :
                [
                    { Table: "component_data", Columns: 'text,prefix', Where: `WHERE  locale=? AND string_key LIKE ?`, Params: [locale, `%${dataToFetch}%`] },
                ];
            this.db.createTables()
                .then(() => this.db.selectTables(tables)).then((result) => {
                this.sendDataToFrontEnd(result, apiRes, locale);
            })
                .catch(() => this.db.selectTables(tables)).then((result) => {
                this.sendDataToFrontEnd(result, apiRes, locale);
            });
        });
    }
    sendDataToFrontEnd(data, apiRes, locale) {
        const feData = {
            headerData: JSON.parse(data[0][0].text.toString()),
            componentsData: {},
            footerData: JSON.parse(data[2][0].text.toString())
        };
        for (const componentData of data[1]) {
            feData.componentsData[(componentData.prefix.replace(new RegExp(`_${locale}`, 'gi'), ''))] = JSON.parse(componentData.text);
        }
        apiRes.end(JSON.stringify(feData));
    }
}
new ExpressApp(express_1.default()).start();
//# sourceMappingURL=index.js.map