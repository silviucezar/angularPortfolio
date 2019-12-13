import Express, { Application, Request, Response, NextFunction } from 'express';
import { File } from "./_Services/fileService";
import { DBCreation } from "./_Database/db_Creation";
import { CommunicationParams } from "./_Interfaces/communicationParams";
import { DBMain } from "./_Database/db_Main"
import { SelectQuery } from "./_Interfaces/MainDBInterface";
import { FrontEndDataTemplate } from "./_Interfaces/FrontEndData";

const App: Application = Express();
const _DBCreation = new DBCreation();
const _DBMain = new DBMain();

function sendTables(res: Response, locale: string, ...QueryParams: SelectQuery[]) {
    const TABLE_QUERIES = [];
    for (const QueryParam of QueryParams) {
        TABLE_QUERIES.push(_DBMain.select(QueryParam))
    }
    Promise.all(TABLE_QUERIES)
        .then((result: object[][]) => {
            const data: FrontEndDataTemplate = {
                [locale]: {
                    headerData: {},
                    componentsData: {

                    },
                    footerData: {}
                }
            };

            for (const [INDEX, TRANSLATION_DATA] of result.entries()) {
                // data[locale as "ro_RO" | "en_US"][]
                console.log(TRANSLATION_DATA)
            }
            // IntroData.details = result[2];
            // const IntroTranslationObjects: object[] | object | any = result[0];
            // const IntroDataObject: object[] | object | any = result[1][0];
            // for (const [Index, TranslationObject] of IntroTranslationObjects.entries()) {
            //     IntroData[locale][TranslationObject.prefix] = {
            //         title: TranslationObject.text,
            //         details: IntroDataObject[Object.keys(IntroDataObject)[Index]]
            //     }
            // }
            // setTimeout(() => {
            //     res.status(200).end(JSON.stringify(IntroData));
            // }, 1000)
        })
        .catch(e => {
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
    console.log(req.query)
    process.env.NODE_ENV = "dev";
    if (process.env.NODE_ENV === "dev") {
        console.log(req.query.locale);
        console.log(req.query.dataPrefix)
        Promise.all(_DBCreation.createTables())
            .then(() => {
                sendTables(res, req.query.locale,
                    { Table: "text_translations", Columns: "*", Where: `WHERE (locale='all' OR locale='${req.query.locale}') AND (prefix LIKE '${req.query.headerPrefix}%')` },
                    { Table: "main_profile_details", Columns: "*" },
                    { Table: "component_data", Columns: "*", Where: `WHERE (locale='all' OR locale='${req.query.locale}') AND (prefix LIKE '${req.query.dataPrefix}%')` });
            })
            .catch((e) => {
                sendTables(res, req.query.locale,
                    { Table: "text_translations", Columns: "*", Where: `WHERE (locale='all' OR locale='${req.query.locale}') AND (prefix LIKE '${req.query.headerPrefix}%')` },
                    { Table: "main_profile_details", Columns: "*" },
                    { Table: "component_data", Columns: "*", Where: `WHERE (locale='all' OR locale='${req.query.locale}') AND (prefix LIKE '${req.query.dataPrefix}%')` });
            });
    } else {
        sendTables(res, req.query.locale,
            { Table: "text_translations", Columns: "*", Where: `WHERE (locale='all' OR locale='${req.query.locale}') AND prefix LIKE ('${req.query.headerPrefix}%')` },
            { Table: "main_profile_details", Columns: "*" },
            { Table: "component_data", Columns: "*", Where: `WHERE (locale='all' OR locale='${req.query.locale}') AND (prefix LIKE '${req.query.dataPrefix}%')` });
    }
});

