/*eslint no-console: ["error", { allow: ["warn", "error"] }] */

import Express, { Application, Request, Response, NextFunction, response } from 'express';
import { File } from "./modules/fileService"
import { CommunicationParams } from "./interfaces/communicationParams";
const app: Application = Express();

app.use((req: Request, res: Response, next: NextFunction) => { res.header("Access-Control-Allow-Origin", "http://localhost:4200"); next() }).listen(8080);

app.get("/api", (req: Request, res: Response) => {
    const params: CommunicationParams = {
        Request: req,
        Response: res,
        Source: "src/assets/video/BigBuckBunny.mp4"
    }
    File.stream(params)
});