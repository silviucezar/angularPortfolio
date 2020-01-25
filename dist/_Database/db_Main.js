"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PGQuery_1 = require("../_Services/PGQuery");
class DBMain {
    constructor() {
        this.PGQuery = new PGQuery_1.PGQuery();
    }
    select(QueryConfig) {
        return new Promise((resolve, reject) => {
            this.PGQuery.Start()
                .then(startResponse => {
                const CONNECTION_RESULT_CLIENT = startResponse._Client;
                const PARAMS = QueryConfig.Params ? QueryConfig.Params : null;
                CONNECTION_RESULT_CLIENT.query(`SELECT ${QueryConfig.Columns} FROM ${QueryConfig.Table} ${QueryConfig.Where ? QueryConfig.Where : ""}`, PARAMS, (err, data) => {
                    if (err) {
                        reject(err);
                        startResponse._Done();
                        return;
                    }
                    ;
                    startResponse._Done();
                    resolve(data.rows);
                });
            })
                .catch(startResponse => {
                console.log(startResponse);
                startResponse._Done();
                reject(startResponse._Error);
            });
        });
    }
}
exports.DBMain = DBMain;
//# sourceMappingURL=db_Main.js.map