import Express, { Application, Request, Response, NextFunction } from 'express';
import { DB } from "./Db/dbMain";
import { SelectQuery } from './Interfaces/MainDBInterface';
import { RowDataPacket, FrontEndData, ComponentsTemplate, FooterTemplate, HeaderTemplate } from './Interfaces/FrontEndData';
import * as fs from 'fs';
import * as https from 'https';
import * as http from 'http';

class ExpressApp {

    private db = new DB();

    constructor(
        public app: Application
    ) {

        process.env.DEPLOYED ? this.initDeployedApp() : this.initServedApp();
    }


    initServedApp() { this.app.listen(8080, () => this.initMetadataApi()) };

    initDeployedApp() {
        this.app.use(Express.static('client')).listen(process.env.PORT);
        this.app.get(/\/portfolio\/(about-me|skills|jobs|education|references|leave-message)/, (apiRes: Request, apiReq: Response) => {
            apiRes.header(`Access-Control-Allow-Origin : ${process.env.ORIGIN}`);
            apiReq.sendFile(`${__dirname}/client/index.html`);
            this.initMetadataApi();
        });
    }

    initMetadataApi() {
        this.app.get('/api/getMetadata', (apiReq: Request, apiRes: Response) => {
            apiRes.header("Access-Control-Allow-Origin", (process.env.DEPLOYED || 'http://localhost:4200'));
            const dataToFetch: string = apiReq.query.dataToFetch;
            const locale: string = apiReq.query.locale;
            console.log(dataToFetch)
            const tables: SelectQuery[] = dataToFetch === 'header_footer' ?
                [
                    { Table: 'header_data', Columns: 'text', Where: `WHERE locale=?`, Params: [locale] },
                    { Table: 'footer_data', Columns: 'text', Where: `WHERE locale=?`, Params: [locale] }
                ] :
                [
                    { Table: 'component_data', Columns: 'text', Where: `WHERE  prefix=?`, Params: [`${dataToFetch}_${locale}`] }
                ];
            this.db.createTables()
                .then(() => this.db.selectTables(tables)).then((result: RowDataPacket[][]) => {
                    dataToFetch === 'header_footer' ? this.sendHeaderFooterMetadata(result, apiRes) : this.sendComponentMetadata(result, apiRes);
                })
                .catch(() => this.db.selectTables(tables)).then((result: RowDataPacket[][]) => {
                    dataToFetch === 'header_footer' ? this.sendHeaderFooterMetadata(result, apiRes) : this.sendComponentMetadata(result, apiRes);
                });
        });
    }

    sendComponentMetadata(data: RowDataPacket[][], apiRes: Response) {
        apiRes.end(data[0][0].text);
    }

    sendHeaderFooterMetadata(data: RowDataPacket[][], apiRes: Response) {
        const headerMetadata: HeaderTemplate = JSON.parse(data[0][0].text.toString()) as HeaderTemplate;
        const footerMetadata: FooterTemplate = JSON.parse(data[1][0].text.toString()) as FooterTemplate;
        apiRes.end(JSON.stringify({ headerMetadata, footerMetadata }));
    }
}

process.env.PORT ? (() => {
    const config = {
        cert: fs.readFileSync((process.env.CERT as string), 'utf8'),
        key: fs.readFileSync((process.env.KEY as string), 'utf8')
    };
    https.createServer(config, new ExpressApp(Express()).app);
})() : http.createServer(new ExpressApp(Express()).app);
