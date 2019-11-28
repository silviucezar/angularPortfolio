/*eslint no-console: ["error", { allow: ["warn", "error"] }] */

import Express, { Application, Request, Response, NextFunction, response } from 'express';
import { File } from "./_Modules/fileService";
import { DBCreation } from "./_Database/db_Creation";
import { CommunicationParams } from "./_Interfaces/communicationParams";

const app: Application = Express();
const _DBCreation = new DBCreation();
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

    if (process.env.NODE_ENV === 'dev') {
        _DBCreation.createTables(-1)
            .then(result => {
                console.log(result);
                res.status(200).end(JSON.stringify(result));
            })
            .catch(e => {
                console.log(e);
            })
    } else {
        console.log("prod logic here")
    }
});

