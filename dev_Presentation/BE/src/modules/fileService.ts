import * as fs from "fs";
import Express, { Application, Request, Response, NextFunction, response } from 'express';

export class File {
    constructor(
        private url: string
    ) { }
    static stream(url: string, req: Request, res: Response) {
        fs.stat(url, (err, stat) => {
            const start = req.query.start;
            const end = req.query.end;
            const size = stat.size;
            if (!start && !end) {
                res.status(206);
                const stream = fs.createReadStream(url);
                stream.on("data", chunk => {
                    const head = JSON.stringify({
                        'Content-Length': "TEST",
                        'Content-Type': 'text/plain',
                    })
                    // res.writeHead(206, head)
                    stream.pipe(res)
                })
            }
            // const range = req.headers.range;
            // if (range) {
            //     const parts = range.replace(/bytes=/, "").split("-")
            //     const start = parseInt(parts[0], 10)
            //     const end = parts[1]
            //       ? parseInt(parts[1], 10)
            //       : stat.size-1
            //     const chunksize = (end-start)+1
            //     const file = fs.createReadStream(url, {start, end})
            //     const head = JSON.stringify({
            //       'Content-Range': `bytes ${start}-${end}/${stat.size}`,
            //       'Accept-Ranges': 'bytes',
            //       'Content-Length': chunksize,
            //       'Content-Type': 'video/mp4',
            //     })
            //     res.writeHead(206, head);
            //     file.pipe(res);
            //   } else {
            //     const head = JSON.stringify({
            //       'Content-Length': stat.size,
            //       'Content-Type': 'video/mp4',
            //     })
            //     res.writeHead(200, head)
            //     fs.createReadStream(url).pipe(res)
            //   }
        });
    }
}