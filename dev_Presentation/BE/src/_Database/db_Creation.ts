import { QueryModel } from "../_Classes/db_QueryModel";
import { PGQuery } from "../_Interfaces/PGQuery";
import { PGQueryInterface } from "../_Interfaces/PGQuery";
import { PoolClient } from "pg";

export class DBCreation {

    private QueryModel: QueryModel;
    private PGQuery: PGQuery;
    private promiseArr: any[] = [];
    private DoTransactions: (
        _Error: Error,
        _Client: PoolClient,
        _Done: () => void,
        TransactionIndex: number,
        TransactionQuery: PGQueryInterface,
        QueryIndex: number,
        resolve: any,
        reject: any
    ) => void;
    constructor() {
        this.QueryModel = new QueryModel();
        this.PGQuery = new PGQuery();
        this.PGQuery.QueryArrays = [
            {
                IsTransaction: false,
                DbActionSingle: `SELECT * from params`
            }, {
                IsTransaction: true,
                DbActionTransaction: [
                    `CREATE TABLE IF NOT EXISTS mainprofiledetails (
                        id SERIAL,
                        firstname VARCHAR(20),
                        midlename VARCHAR(20),
                        lastname VARCHAR(50),
                        email VARCHAR(50),
                        latestrole VARCHAR(50),
                        age SMALLINT,
                        birthdate TEXT,
                        gender VARCHAR(10),
                        phoneno SMALLINT
                        )`,
                    `CREATE TABLE IF NOT EXISTS mainprofiledetails2 (
                        id SERIAL,
                        firstname VARCHAR(20),
                        midlename VARCHAR(20),
                        lastname VARCHAR(50),
                        email VARCHAR(50),
                        latestrole VARCHAR(50),
                        age SMALLINT,
                        birthdate TEXT,
                        gender VARCHAR(10),
                        phoneno SMALLINT
                        )`,
                ]
            }
        ];

        this.DoTransactions = (_Error: Error, _Client: PoolClient, _Done: () => void, TransactionIndex: number, Query: PGQueryInterface, QueryIndex: number, resolve: any, reject: any) => {
            _Client.query(Query.DbActionTransaction[TransactionIndex], (_TransactionError, _TransactionData) => {
                if (_TransactionError) { reject(this.PGQuery.Rollback(_TransactionError, _Client, _Done)); return; }
                if (QueryIndex + 1 === this.PGQuery.QueryArrays.length && TransactionIndex + 1 === Query.DbActionTransaction.length) {
                    resolve(this.PGQuery.Commit(_Client, _Done, _TransactionData));
                    this.createTables(QueryIndex + 1);
                } else {
                    this.DoTransactions(_Error, _Client, _Done, TransactionIndex + 1, this.PGQuery.QueryArrays[TransactionIndex + 1], QueryIndex, resolve, reject);
                }
            });
        }
    }

    createTables(QueryIndex: number, overwrite?: boolean): Promise<any> {
        console.log(QueryIndex, this.PGQuery.QueryArrays.length)
        if (QueryIndex === this.PGQuery.QueryArrays.length) {
            return Promise.all(this.promiseArr).then(result => {
                console.log("done");
            });
        } else {
            const Query = this.PGQuery.QueryArrays[QueryIndex];
            console.log(Query)
            this.promiseArr.push(
                new Promise((resolve: any, reject: any) => {
                    if (!overwrite) {
                        if (Query.IsTransaction) {
                            this.QueryModel.Pool.connect((_Error, _Client, _Done) => {
                                if (_Error) { reject(this.PGQuery.Rollback(_Error, _Client, _Done)); return; }
                                _Client.query("BEGIN", _BeginErr => {
                                    if (_BeginErr) { reject(this.PGQuery.Rollback(_BeginErr, _Client, _Done)); return; }
                                    this.DoTransactions(_Error, _Client, _Done, 0, Query, QueryIndex, resolve, reject);
                                });
                            });
                        } else {
                            this.QueryModel.Pool.connect((_Error, _Client, _Done) => {
                                if (_Error) { reject(this.PGQuery.Rollback(_Error, _Client, _Done)); return; }
                                _Client.query(Query.DbActionSingle, (_TransactionError: any, _TransactionData) => {
                                    if (_TransactionError) {
                                        if (_TransactionError.code === "42P01") {
                                            reject(this.PGQuery.Rollback(_TransactionError, _Client, _Done));
                                            return;
                                        }
                                    } else {
                                        resolve(_TransactionData);
                                        _Done();
                                        this.createTables(QueryIndex + 1);
                                    }

                                });
                            });
                        }
                    } else {
                        console.log("noooooooope");
                    }
                }));
        }
    }
}