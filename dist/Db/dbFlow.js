"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = require("mysql");
const dbQueriesLogic_1 = require("./dbQueriesLogic");
const fs = __importStar(require("fs"));
class DBFlow extends dbQueriesLogic_1.DBQueriesLogic {
    constructor() {
        super();
        this.localDbConfig = !process.env.PORT ? JSON.parse(fs.readFileSync(`${__dirname}/dbconfig.json`).toString()) : null;
        this.pool = mysql_1.createPool({
            host: process.env.DBHOST || this.localDbConfig.DBHOST,
            user: process.env.DBUSER || this.localDbConfig.DBUSER,
            password: process.env.DBPASS || this.localDbConfig.DBPASS,
            database: process.env.DB || this.localDbConfig.DB
        });
    }
    start(action, queryDescription) {
        return new Promise((resolve, reject) => {
            this.pool.getConnection((err, connection) => {
                if (err)
                    console.log(err);
                Promise.all(this.initQuery(connection, action, queryDescription))
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