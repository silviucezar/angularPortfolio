import dotenv from 'dotenv'
dotenv.config();
import Express, { Application, Request, Response, NextFunction } from 'express';
import { DB } from "./Db/dbMain";
import { SelectQuery } from './Interfaces/MainDBInterface';
import { RowDataPacket, FrontEndData, ComponentsTemplate } from './Interfaces/FrontEndData';


class ExpressApp {
    private db = new DB();
    constructor(
        private app: Application
    ) { }

    start() { process.env.DEPLOYED ? this.initDeployedApp() : this.initServedApp() }

    initServedApp() { this.app.listen(8080, () => { this.initMetadataApi(); }); };

    initDeployedApp() {
        this.app.use(Express.static('FE')).listen(8080);
        this.app.get(/\/portfolio\/(about-me|skills|jobs|education|references|leave-message)/, (apiRes: Request, apiReq: Response) => {
            apiRes.header(`Access-Control-Allow-Origin : ${process.env}`);
            apiReq.sendFile(`${__dirname}/FE/index.html`);
            this.initMetadataApi();
        });
    }

    initMetadataApi() {
        this.app.get('/api/getMetadata', (apiReq: Request, apiRes: Response) => {
            apiRes.header("Access-Control-Allow-Origin", (process.env.DEPLOYED || 'http://localhost:4200'));
            const dataToFetch: string = apiReq.query.dataToFetch;
            const locale: string = apiReq.query.locale;
            const tables: SelectQuery[] = apiReq.query.isInitialLoad ?
                [
                    { Table: 'header_data', Columns: 'text', Where: `WHERE locale=?`, Params: [locale] },
                    { Table: 'component_data', Columns: 'text,prefix', Where: `WHERE  locale=? AND string_key LIKE ?`, Params: [locale, `%${dataToFetch}%`] },
                    { Table: 'footer_data', Columns: 'text', Where: `WHERE locale=?`, Params: [locale] }
                ] :
                [
                    { Table: 'component_data', Columns: 'text,prefix', Where: `WHERE  locale=? AND string_key LIKE ?`, Params: [locale, `%${dataToFetch}%`] },
                ];
            this.db.createTables()
                .then(() => this.db.selectTables(tables)).then((result: RowDataPacket[][]) => {
                    this.sendDataToFrontEnd(result, apiRes, locale);
                })
                .catch(() => this.db.selectTables(tables)).then((result: RowDataPacket[][]) => {
                    this.sendDataToFrontEnd(result, apiRes, locale);
                });
        });
    }

    sendDataToFrontEnd(data: RowDataPacket[][], apiRes: Response, locale: string) {
        const feData: FrontEndData = {
            headerData: JSON.parse(data[0][0].text.toString()),
            componentsData: {},
            footerData: JSON.parse(data[2][0].text.toString())
        };
        for (const componentData of data[1]) {
            feData.componentsData[(componentData.prefix.replace(new RegExp(`_${locale}`, 'gi'), '')) as keyof ComponentsTemplate] = JSON.parse((componentData.text as any));
        }
        apiRes.end(JSON.stringify(feData));
    }
}

new ExpressApp(Express()).start();