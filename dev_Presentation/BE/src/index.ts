import Express, { Application, Request, Response, NextFunction, response } from 'express';
import { File } from "./_Services/fileService";
import { DBCreation } from "./_Database/db_Creation";
import { CommunicationParams } from "./_Interfaces/communicationParams";
import { DBMain } from "./_Database/db_Main"
import { SelectQuery } from "./_Interfaces/MainDBInterface";

const app: Application = Express();
const _DBCreation = new DBCreation();
const _DBMain = new DBMain();

app.use((req: Request, res: Response, next: NextFunction) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");
    // res.header("Access-Control-Allow-Headers", "Accept-Ranges");
    // res.header("Accept-Ranges", "bytes");
    next();
}).listen(8080, () => { console.log("Server running...") });

app.get("/api/video", (req: Request, res: Response) => {
    const params: CommunicationParams = {
        Request: req,
        Response: res,
        Source: "src/_Assets/_Video/Particle.mp4"
    }
    File.stream(params)
});

app.get("/api/", (req: Request, res: Response) => {
    process.env.NODE_ENV = "dev";
    function sendTables(...QueryParams: SelectQuery[]) {
        const tableQueries = [];
        for (const QueryParam of QueryParams) {
            tableQueries.push(_DBMain.select(QueryParam))
        }
        Promise.all(tableQueries)
            .then(result => {
                console.log(result);
                res.status(200).end(JSON.stringify({ data: result }));;

            })
            .catch(e => {
                console.log(e);
                // res.status(200).end(JSON.stringify({ data: result }));;
            });
    }

    if (process.env.NODE_ENV === "dev") {
        Promise.all(_DBCreation.createTables())
            .then(() => {
                sendTables({
                    Table: "text_translations",
                    Columns: "*"
                },
                    {
                        Table: "mainprofiledetails",
                        Columns: "*",
                        Where: ""
                    }
                );
            })
            .catch((e) => {
                sendTables({
                    Table: "text_translations",
                    Columns: "*"
                },
                    {
                        Table: "mainprofiledetails",
                        Columns: "*",
                        Where: ""
                    }
                );
            });
    } else {
        sendTables({
            Table: "text_translations",
            Columns: "*"
        },
            {
                Table: "mainprofiledetails",
                Columns: "*",
                Where: ""
            }
        );
    }
});

