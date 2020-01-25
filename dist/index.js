"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import { File } from "./_Services/fileService";
// import { DBCreation } from "./_Database/db_Creation";
// import { CommunicationParams } from "./_Interfaces/communicationParams";
// import { DBMain } from "./_Database/db_Main"
// import { SelectQuery } from "./_Interfaces/MainDBInterface";
// import { FrontEndDataTemplate, DBDataTemplate } from "./_Interfaces/FrontEndData";
// const _DBCreation = new DBCreation();
// const _DBMain = new DBMain();
class ExpressApp {
    constructor(app) {
        this.app = app;
    }
    start() {
        this.app.use((req, res, next) => {
            if (process.env.DEPLOYED) {
                res.sendFile(`${__dirname}/FE/index.html`);
            }
            else {
                // if (process.env.NODE_ENV === 'development') {
                // res.end('DEV ENV')
                // } else {
                //     res.end('SOME OTHER')
                // }
            }
            // res.header("Access-Control-Allow-Origin", "http://localhost:4200");
            next();
        }).listen(8080, () => { console.log("Server running..."); });
    }
}
const expressApp = new ExpressApp(express_1.default());
expressApp.start();
// function sendTables(res: Response, locale: string, QueryParams: SelectQuery[]) {
//     const TABLE_QUERIES = [];
//     for (const QueryParam of QueryParams) {
//         TABLE_QUERIES.push(_DBMain.select(QueryParam))
//     }
//     Promise.all(TABLE_QUERIES)
//         .then((result: object[][]) => {
//             console.log(result)
//             const FE_DATA: FrontEndDataTemplate = {
//                 [locale]: {}
//             }
//             let RAW_CONTENT_DATA_ARRAY: DBDataTemplate[] = null;
//             if (QueryParams.length === 1) {
//                 RAW_CONTENT_DATA_ARRAY = result[0];
//                 FE_DATA[locale as 'ro_RO' | 'en_US'] = {
//                     componentsData: {}
//                 }
//             } else {
//                 const HEADER_FOOTER_TRANSLATIONS: DBDataTemplate[] = result[0];
//                 const RAW_HEADER_DATA_ARRAY: any = result[1][0];
//                 RAW_CONTENT_DATA_ARRAY = result[2];
//                 FE_DATA[locale as 'ro_RO' | 'en_US'] = {
//                     headerData: {},
//                     footerData: {},
//                     componentsData: {}
//                 }
//                 for (const [INDEX, RAW_TRANSLATIONS] of HEADER_FOOTER_TRANSLATIONS.entries()) {
//                     const COOKED_TRANSLATIONS = {
//                         [RAW_TRANSLATIONS.prefix.replace(`_${locale}`, '')]: {
//                             text: RAW_TRANSLATIONS.text,
//                             info: INDEX < 9 ? RAW_HEADER_DATA_ARRAY[Object.keys(RAW_HEADER_DATA_ARRAY)[INDEX]] : "N/A"
//                         }
//                     };
//                     Object.assign(FE_DATA[localeKey()][headerFooterKey(RAW_TRANSLATIONS)], COOKED_TRANSLATIONS);
//                 }
//             }
//             for (const RAW_CONTENT_DATA of RAW_CONTENT_DATA_ARRAY) {
//                 const COOKED_DATA = {
//                     [RAW_CONTENT_DATA.prefix.replace(/_(ro_RO|en_US)/gi, '')]: JSON.parse(RAW_CONTENT_DATA.text.toString())
//                 }
//                 Object.assign(FE_DATA[localeKey()].componentsData, COOKED_DATA);
//             }
//             function localeKey() { return locale as 'ro_RO' | 'en_US'; }
//             function headerFooterKey(translation: DBDataTemplate) { return `${translation.prefix.match(/header|footer/)[0]}Data` as 'headerData' | 'footerData'; }
//             res.status(200).end(JSON.stringify(FE_DATA));
//         })
//         .catch(e => {
//             console.log(e)
//             res.status(200).end(JSON.stringify({ data: "result" }));;
//         });
// }
// App.use((req: Request, res: Response, next: NextFunction) => {
//     res.header("Access-Control-Allow-Origin", "http://localhost:4200");
//     next();
// }).listen(8080, () => { console.log("Server running...") });
// App.get("/api/", (req: Request, res: Response) => {
//     process.env.NODE_ENV = "dev";
//     const dataToFetch = req.query.dataToFetch;
//     const TABLES = req.query.isInitialLoad ?
//         [
//             { Table: 'text_translations', Columns: 'text,prefix', Where: `WHERE (locale='all' OR locale=$1) AND (prefix LIKE $2)`, Params: [req.query.locale, "intro_%"] },
//             { Table: "main_profile_details", Columns: "*" },
//             { Table: "component_data", Columns: "string_key,text,prefix", Where: `WHERE (locale='all' OR locale=$1) AND (string_key LIKE $2)`, Params: [req.query.locale, `%${dataToFetch}%`] }
//         ] :
//         [
//             { Table: "component_data", Columns: "string_key,text,prefix", Where: `WHERE (locale='all' OR locale=$1) AND (string_key LIKE $2)`, Params: [req.query.locale, `%${dataToFetch}%`] }
//         ];
//     if (process.env.NODE_ENV === "dev") {
//         Promise.all(_DBCreation.createTables())
//             .then(() => {
//                 sendTables(res, req.query.locale, TABLES);
//             })
//             .catch((e) => {
//                 sendTables(res, req.query.locale, TABLES);
//             });
//     } else {
//         sendTables(res, req.query.locale, TABLES);
//     }
// });
//# sourceMappingURL=index.js.map