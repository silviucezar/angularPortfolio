import Express, { Application, Request, Response, NextFunction } from 'express';
import { File } from "./_Services/fileService";
import { DBCreation } from "./_Database/db_Creation";
import { CommunicationParams } from "./_Interfaces/communicationParams";
import { DBMain } from "./_Database/db_Main"
import { SelectQuery } from "./_Interfaces/MainDBInterface";
import { FrontEndDataTemplate, DBDataTemplate } from "./_Interfaces/FrontEndData";

const App: Application = Express();
const _DBCreation = new DBCreation();
const _DBMain = new DBMain();

function sendTables(res: Response, locale: string, QueryParams: SelectQuery[]) {

    const TABLE_QUERIES = [];
    for (const QueryParam of QueryParams) {
        TABLE_QUERIES.push(_DBMain.select(QueryParam))
    }
    Promise.all(TABLE_QUERIES)
        .then((result: object[][]) => {
            console.log(result)
            const HEADER_FOOTER_TRANSLATIONS: DBDataTemplate[] = result[0];
            const RAW_HEADER_DATA_ARRAY: any = result[1][0];
            const RAW_CONTENT_DATA_ARRAY: DBDataTemplate[] = result[2];
            const FE_DATA: FrontEndDataTemplate = {
                [locale]: {
                    headerData: {},
                    footerData: {},
                    componentsData: {}
                }
            };
            for (const [INDEX, RAW_TRANSLATIONS] of HEADER_FOOTER_TRANSLATIONS.entries()) {
                const COOKED_TRANSLATIONS = {
                    [RAW_TRANSLATIONS.prefix.replace(`_${locale}`, '')]: {
                        text: RAW_TRANSLATIONS.text,
                        info: INDEX < 9 ? RAW_HEADER_DATA_ARRAY[Object.keys(RAW_HEADER_DATA_ARRAY)[INDEX]] : "N/A"
                    }
                };
                Object.assign(FE_DATA[localeKey()][headerFooterKey(RAW_TRANSLATIONS)], COOKED_TRANSLATIONS);
            }
            console.log(RAW_CONTENT_DATA_ARRAY)
            for (const [INDEX, RAW_CONTENT_DATA] of RAW_CONTENT_DATA_ARRAY.entries()) {
                const COOKED_DATA = {
                    [RAW_CONTENT_DATA.prefix.replace(/_(ro_RO|en_US)/gi,'')]: JSON.parse(RAW_CONTENT_DATA.text.toString())
                }
                Object.assign(FE_DATA[localeKey()].componentsData, COOKED_DATA);
            }

            function localeKey() { return locale as 'ro_RO' | 'en_US'; }

            function headerFooterKey(translation: DBDataTemplate) { return `${translation.prefix.match(/header|footer/)[0]}Data` as 'headerData' | 'footerData'; }

            res.status(200).end(JSON.stringify(FE_DATA));
        })
        .catch(e => {
            console.log(e)
            res.status(200).end(JSON.stringify({ data: "result" }));;
        });
}


App.use((req: Request, res: Response, next: NextFunction) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");
    next();
}).listen(8080, () => { console.log("Server running...") });

App.get("/api/video", (req: Request, res: Response) => {
    const params: CommunicationParams = {
        Request: req,
        Response: res,
        Source: "src/_Assets/_Video/Particle.mp4"
    }
    File.stream(params)
});

App.get("/api/", (req: Request, res: Response) => {
    process.env.NODE_ENV = "dev";
    const dataToFetch = req.query.dataToFetch;
    const TABLES = dataToFetch[0] === 'InitialData' ?
        [
            { Table: 'text_translations', Columns: 'text,prefix', Where: `WHERE (locale='all' OR locale=$1) AND (prefix LIKE $2)`, Params: [req.query.locale, "intro_%"] },
            { Table: "main_profile_details", Columns: "*" },
            { Table: "component_data", Columns: "string_key,text,prefix", Where: `WHERE (locale='all' OR locale=$1) AND (string_key LIKE $2)`, Params: [req.query.locale, `%${dataToFetch[1]}%`] }
        ] :
        [
            { Table: "component_data", Columns: "string_key,text,prefix", Where: `WHERE (locale='all' OR locale=$1) AND (string_key LIKE $2)`, Params: [req.query.locale, `%${dataToFetch[0]}%`] }
        ];
    if (process.env.NODE_ENV === "dev") {
        Promise.all(_DBCreation.createTables())
            .then(() => {
                sendTables(res, req.query.locale, TABLES);
            })
            .catch((e) => {
                sendTables(res, req.query.locale, TABLES);
            });
    } else {
        sendTables(res, req.query.locale, TABLES);
    }
});
