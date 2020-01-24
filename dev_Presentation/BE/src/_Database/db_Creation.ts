import { PGQuery } from "../_Services/PGQuery";
import { PoolClient } from "pg";
import { DBQuries } from './db_Queries';

export class DBCreation {

    private PGQuery: PGQuery;
    private PromiseArr: any[] = [];
    private QueryArrays: string[][];
    constructor() {
        this.PGQuery = new PGQuery();
        this.QueryArrays = new DBQuries().createAndInsert;
    }

    DoTransactions(_Client: PoolClient, _Done: () => void, TransactionIndex: number, TransactionQuery: string[], resolve: any, reject: any): void {
        _Client.query(TransactionQuery[TransactionIndex], (_TransactionError: any, _TransactionData) => {
            if (_TransactionError) {
                this.PGQuery.Release(_TransactionError, _Client, _Done, reject);
            } else if (TransactionIndex + 1 === TransactionQuery.length) {
                this.PGQuery.Commit(_Client, _Done, _TransactionData, reject, resolve);
            } else {
                this.DoTransactions(_Client, _Done, TransactionIndex + 1, TransactionQuery, resolve, reject);
            }
        });
    }

    createTables(): any {
        for (const Query of this.QueryArrays) {
            this.PromiseArr.push(
                new Promise((resolve: any, reject: any) => {
                    this.PGQuery.Start()
                        .then(ConnectionResult => {
                            const ConnectionResultClient: PoolClient = ConnectionResult._Client;
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