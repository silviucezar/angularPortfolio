"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PGQuery_1 = require("../_Services/PGQuery");
const db_Queries_1 = require("./db_Queries");
class DBCreation {
    constructor() {
        this.PromiseArr = [];
        this.PGQuery = new PGQuery_1.PGQuery();
        this.QueryArrays = new db_Queries_1.DBQuries().createAndInsert;
    }
    DoTransactions(_Client, _Done, TransactionIndex, TransactionQuery, resolve, reject) {
        _Client.query(TransactionQuery[TransactionIndex], (_TransactionError, _TransactionData) => {
            if (_TransactionError) {
                this.PGQuery.Release(_TransactionError, _Client, _Done, reject);
            }
            else if (TransactionIndex + 1 === TransactionQuery.length) {
                this.PGQuery.Commit(_Client, _Done, _TransactionData, reject, resolve);
            }
            else {
                this.DoTransactions(_Client, _Done, TransactionIndex + 1, TransactionQuery, resolve, reject);
            }
        });
    }
    createTables() {
        for (const Query of this.QueryArrays) {
            this.PromiseArr.push(new Promise((resolve, reject) => {
                this.PGQuery.Start()
                    .then(ConnectionResult => {
                    const ConnectionResultClient = ConnectionResult._Client;
                    ConnectionResultClient.query("BEGIN", _BeginErr => {
                        this.DoTransactions(ConnectionResult._Client, ConnectionResult._Done, 0, Query, resolve, reject);
                    });
                })
                    .catch(ConnectionResult => {
                    ConnectionResult._Done();
                    reject(ConnectionResult._Error);
                });
            }));
        }
        return this.PromiseArr;
    }
}
exports.DBCreation = DBCreation;
//# sourceMappingURL=db_Creation.js.map