import { Pool, createPool, MysqlError, Connection, PoolConnection } from 'mysql';
import { DBQueriesLogic } from './dbQueriesLogic';
import { SelectQuery } from '../Interfaces/MainDBInterface';

export class DBFlow extends DBQueriesLogic {

    private pool: Pool = createPool({
        host: '139.162.166.31',
        user: 'silviuci_scimpoeru',
        password: 'HvJHTsQm9KteBLfKMytCYBkW',
        database: 'silviuci_porfolio'
    });

    constructor() {
        super();
    }
    start(action: string, tables?: SelectQuery[]): Promise<any> {
        return new Promise((resolve, reject) => {
            this.pool.getConnection((err: MysqlError, connection: PoolConnection) => {
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