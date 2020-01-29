import { Pool, createPool, MysqlError, PoolConnection } from 'mysql';
import { DBQueriesLogic } from './dbQueriesLogic';
import { SelectQuery } from '../Interfaces/MainDBInterface';
import * as fs from 'fs';


export class DBFlow extends DBQueriesLogic {

    private localDbConfig: any = !process.env.PORT ? JSON.parse(fs.readFileSync(`${__dirname}/dbconfig.json`).toString()) : null;

    private pool: Pool = createPool({
        host: process.env.DBHOST || this.localDbConfig.DBHOST,
        user: process.env.DBUSER || this.localDbConfig.DBUSER,
        password: process.env.DBPASS || this.localDbConfig.DBPASS,
        database: process.env.DB || this.localDbConfig.DB
    });

    constructor() {
        super();
    }
    start(action: string, tables?: SelectQuery[]): Promise<any> {
        return new Promise((resolve, reject) => {
            this.pool.getConnection((err: MysqlError, connection: PoolConnection) => {
                if (err) console.log(err);
                console.log(connection)
                Promise.all(this.initQuery(connection, action, tables))
                    .then((result) => {
                        this.endConnection(connection);
                        resolve(result);
                    })
                    .catch(() => {
                        reject(this.endConnection(connection));
                    });
            });
        });
    }

    endConnection(connection: PoolConnection) {
        try {
            connection.query('COMMIT', () => connection.release());
        } catch (e) {
            try {
                connection.query('ROLLBACK', () => connection.release());
            } catch (e) {
                connection.release();
            };
        }
    }
}