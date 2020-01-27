"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = require("mysql");
const dbQueriesLogic_1 = require("./dbQueriesLogic");
class DBFlow extends dbQueriesLogic_1.DBQueriesLogic {
    constructor() {
        super();
        this.pool = mysql_1.createPool({
            host: '139.162.166.31',
            user: 'silviuci_scimpoeru',
            password: 'HvJHTsQm9KteBLfKMytCYBkW',
            database: 'silviuci_porfolio'
        });
    }
    start(action, tables) {
        console.log(this.pool);
        return new Promise((resolve, reject) => {
            this.pool.getConnection((err, connection) => {
                console.log(err);
                console.log(connection);
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
    endConnection(connection) {
        console.log(connection);
        try {
            connection.query('COMMIT', () => connection.release());
        }
        catch (e) {
            try {
                connection.query('ROLLBACK', () => connection.release());
            }
            catch (e) {
                connection.release();
            }
            ;
        }
    }
}
exports.DBFlow = DBFlow;
//# sourceMappingURL=dbFlow.js.map