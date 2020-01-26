"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dbQueriesText_1 = require("./dbQueriesText");
class DBQueriesLogic {
    constructor() {
        this.queryArrays = new dbQueriesText_1.DBQuries().createAndInsert;
    }
    initQuery(connection, action, tables) {
        switch (action) {
            case 'create':
                return this.startCreatingTables(connection);
            case 'select':
                return this.startSelectingTables(connection, tables);
            default:
                return [new Promise((resolve, reject) => { reject(); })];
        }
    }
    startCreatingTables(connection) {
        const promiseArr = [];
        for (const query of this.queryArrays) {
            promiseArr.push(new Promise((resolveTableCreation, rejectTableCreation) => {
                connection.query('BEGIN', (beginErr) => {
                    if (beginErr)
                        rejectTableCreation(beginErr);
                    else {
                        for (const transaction of query) {
                            connection.query(transaction, (queryErr) => {
                                if (queryErr)
                                    rejectTableCreation(queryErr);
                                else
                                    resolveTableCreation();
                            });
                        }
                    }
                });
            }));
        }
        return promiseArr;
    }
    startSelectingTables(connection, tables) {
        const promiseArr = [];
        for (const q of tables) {
            promiseArr.push(new Promise((resolveTableSelection, rejectTableSelection) => {
                connection.query('BEGIN', (beginErr) => {
                    if (beginErr)
                        rejectTableSelection(beginErr);
                    else {
                        const params = q.Params;
                        connection.query(`SELECT ${q.Columns} FROM ${q.Table} ${q.Where ? q.Where : ""}`, params, (queryErr, data) => {
                            if (queryErr)
                                rejectTableSelection(queryErr);
                            else
                                resolveTableSelection(data);
                        });
                    }
                });
            }));
        }
        return promiseArr;
    }
}
exports.DBQueriesLogic = DBQueriesLogic;
//# sourceMappingURL=dbQueriesLogic.js.map