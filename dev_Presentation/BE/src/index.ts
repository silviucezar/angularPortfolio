/*eslint no-console: ["error", { allow: ["warn", "error"] }] */

import Express, { Application, Request, Response, NextFunction, response } from 'express';
import { File } from "./modules/fileService"

const app: Application = Express();

app.use((req: Request, res: Response, next: NextFunction) => { res.header("Access-Control-Allow-Origin", "http://localhost:4200"); next() }).listen(8080);

app.get("/api", (req, res) => {
    // fs.readFile("assets/581965812.mp4",(err,data) =>{
    //   console.log(data.length)
    // })
    // console.log(fileStream)
    File.stream("src/assets/video/585252972.mp4", req, res)
});