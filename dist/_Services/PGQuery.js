"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_QueryModel_1 = require("../_Models/db_QueryModel");
class PGQuery {
    constructor() {
        this.QueryModel = new db_QueryModel_1.QueryModel();
        this.Release = (_Error, _Client, _Done, reject) => {
            if (!_Error.code.match(/42P01|42P07/)) {
                console.log(_Error);
                console.log("retry logic here");
            }
            else {
                reject(_Client.query("ROLLBACK", err => { _Done(); return err ? err : _Error; }));
            }
        };
        this.Commit = (_Client, _Done, _TransactionData, reject, resolve) => {
            _Client.query("COMMIT", err => {
                if (err) {
                    this.Release(err, _Client, _Done, reject);
                    return;
                }
                _Done();
                resolve(_TransactionData);
            });
        };
        this.Start = () => {
            return new Promise((resolve, reject) => {
                this.QueryModel.Pool.connect((_Error, _Client, _Done) => {
                    if (_Error) {
                        reject({ _Error, _Done });
                        return;
                    }
                    resolve({ _Error, _Client, _Done });
                });
            });
        };
    }
}
exports.PGQuery = PGQuery;
//# sourceMappingURL=PGQuery.js.map