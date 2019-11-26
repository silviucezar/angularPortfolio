import { QueryConfig, PoolClient } from "pg";

export class PGQuery {
    public QueryArrays: string[][];
    public readonly Release: (_Error: any, _Client: PoolClient, _Done: () => void, reject: any) => void;
    public readonly Commit: (_Client: PoolClient, _Done: () => void, _TransactionData: any, reject: any, resolve: any) => void;

    constructor() {
        this.Release = (_Error: any, _Client: PoolClient, _Done: () => void, reject: any) => {
            if (_Error.code.match(/42P01|42P07/)) {
                // _Done();
                // _retry();
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
    }
}