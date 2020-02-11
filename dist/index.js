"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dbMain_1 = require("./Db/dbMain");
const fs = __importStar(require("fs"));
const https = __importStar(require("https"));
const http = __importStar(require("http"));
const bodyParser = __importStar(require("body-parser"));
class ExpressApp {
    constructor(app) {
        this.app = app;
        this.db = new dbMain_1.DB();
        process.env.DEPLOYED ? this.initDeployedApp() : this.initServedApp();
    }
    initServedApp() { this.app.listen(8080, () => this.initAPI()); }
    ;
    initDeployedApp() {
        this.app.use(express_1.default.static('client')).listen(process.env.PORT);
        this.app.get(/\/portfolio\/(about-me|skills|jobs|education|references|leave-message)/, (apiRes, apiReq) => {
            apiRes.header(`Access-Control-Allow-Origin : ${process.env.ORIGIN}`);
            apiReq.sendFile(`${__dirname}/client/index.html`);
            this.initAPI();
        });
    }
    initAPI() {
        this.app.get('/api/getMetadata', (apiReq, apiRes) => {
            apiRes.header("Access-Control-Allow-Origin", (process.env.DEPLOYED || 'http://localhost:4200'));
            const dataToFetch = apiReq.query.dataToFetch;
            const locale = apiReq.query.locale;
            const tables = dataToFetch === 'initial' ?
                [
                    { Table: 'header_data', Columns: 'text', Where: `WHERE locale=?`, Params: [locale] },
                    { Table: 'menu_translations', Columns: 'text', Where: `WHERE locale=?`, Params: [locale] },
                    { Table: 'footer_data', Columns: 'text', Where: `WHERE locale=?`, Params: [locale] }
                ] :
                [
                    { Table: 'component_data', Columns: 'text', Where: `WHERE  prefix=?`, Params: [`${dataToFetch}_${locale}`] }
                ];
            this.db.createTables()
                .then(() => this.db.selectTables(tables)).then((result) => {
                dataToFetch === 'initial' ? this.sendInitialMetadata(result, apiRes) : this.sendComponentMetadata(result, apiRes);
            })
                .catch(() => this.db.selectTables(tables)).then((result) => {
                dataToFetch === 'initial' ? this.sendInitialMetadata(result, apiRes) : this.sendComponentMetadata(result, apiRes);
            });
        });
        this.app.post('/api/sendFeedback', bodyParser.json(), (apiReq, apiRes) => __awaiter(this, void 0, void 0, function* () {
            apiRes.header("Access-Control-Allow-Origin", (process.env.DEPLOYED || 'http://localhost:4200'));
            yield this.db.insertIntoTables([
                { Table: 'feedback', Columns: 'message', RowData: `?`, Params: [apiReq.body.feedback] }
            ]);
            apiRes.end(JSON.stringify({ status: 'success' }));
        }));
    }
    sendComponentMetadata(data, apiRes) {
        apiRes.end(data[0][0].text);
    }
    sendInitialMetadata(data, apiRes) {
        const headerMetadata = JSON.parse(data[0][0].text.toString());
        const menuMetadata = data[1][0].text.toString().split(",");
        const footerMetadata = JSON.parse(data[2][0].text.toString());
        apiRes.end(JSON.stringify({ headerMetadata, footerMetadata, menuMetadata }));
    }
}
process.env.PORT ? (() => {
    const config = {
        cert: fs.readFileSync(process.env.CERT, 'utf8'),
        key: fs.readFileSync(process.env.KEY, 'utf8')
    };
    https.createServer(config, new ExpressApp(express_1.default()).app);
})() : http.createServer(new ExpressApp(express_1.default()).app);
//# sourceMappingURL=index.js.map