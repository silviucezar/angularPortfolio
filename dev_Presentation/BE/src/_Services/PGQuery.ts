import { PoolClient } from "pg";
import { QueryModel } from "../_Models/db_QueryModel"

export class PGQuery {

    private QueryModel = new QueryModel();

    public QueryArrays: string[][];
    public readonly Release: (_Error: any, _Client: PoolClient, _Done: () => void, reject: any) => void;
    public readonly Commit: (_Client: PoolClient, _Done: () => void, _TransactionData: any, reject: any, resolve: any) => void;
    public readonly Start: () => Promise<any>;
    constructor() {
        this.Release = (_Error: any, _Client: PoolClient, _Done: () => void, reject: any) => {
            if (!_Error.code.match(/42P01|42P07/)) {
                console.log("retry logic here")
            } else {
                reject(_Client.query("ROLLBACK", err => { _Done(); return err ? err : _Error; }));
            }

        };
        this.Commit = (_Client: PoolClient, _Done: () => void, _TransactionData: any, reject: any, resolve: any) => {
            _Client.query("COMMIT", err => {
                if (err) { this.Release(err, _Client, _Done, reject); return; }
                _Done();
                resolve(_TransactionData);
            });
        };
        this.Start = (): Promise<any> => {
            return new Promise((resolve, reject) => {
                this.QueryModel.Pool.connect((_Error, _Client, _Done) => {
                    if (_Error) {
                        reject({ _Error, _Client, _Done }); return;
                    }
                    resolve({ _Error, _Client, _Done });
                });
            })

        }
    }
}