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
    start() {
        this.app.use((req, res, next) => {
            if (process.env.DEPLOYED) {
                res.sendFile(`${__dirname}/FE/index.html`);
                this.initDeployedApp(res);
            }
            else {
                this.initServedApp(res);
            }
            next();
        }, express_1.default.static('FE')).listen(8080, () => { console.log("Server running..."); });
    }
    initServedApp(res) {
        res.header("Access-Control-Allow-Origin", "http://localhost:4200");
        this.app.get("/api/", (apiReq, apiRes) => {
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
    ;
    initDeployedApp(res) {
        res.header('Access-Control-Allow-Origin', 'http://stage.silviucimpoeru.com/');
        this.app.get('/', (apiReq, apiRes) => {
            apiRes.end('123');
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