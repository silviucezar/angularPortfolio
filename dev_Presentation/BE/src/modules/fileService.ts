import * as fs from "fs";
import Express, { Application, Request, Response, NextFunction, response } from 'express';

export class File {
    constructor(
        private url: string
    ) { }
    static stream(url: string, req: Request, res: Response) {
        const url2 = "src/assets/video/test.txt"
        const i = 0
        const stream = fs.createReadStream(url2, { encoding: "utf8" });
        stream.on("data", chunk => {
            res.write(JSON.stringify({ data: "world" }));
        })
    }
}