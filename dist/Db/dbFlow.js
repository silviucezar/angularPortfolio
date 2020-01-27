"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = require("mysql");
const dbQueriesLogic_1 = require("./dbQueriesLogic");
class DBFlow extends dbQueriesLogic_1.DBQueriesLogic {
    constructor() {
        super();
        this.pool = mysql_1.createPool({
            host: process.env.DBHOST,
            user: process.env.DBUSER,
            password: process.env.DBPASS,
            database: process.env.DB
        });
    }
    start(action, tables) {
        return new Promise((resolve, reject) => {
            this.pool.getConnection((err, connection) => {
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