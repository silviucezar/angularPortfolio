import { QueryConfig, PoolClient } from "pg";

export interface PGQueryInterface {
    IsTransaction: boolean,
    DbActionSingle?: string | QueryConfig;
    DbActionTransaction?: string[];
}

export class PGQuery {
    public QueryArrays: PGQueryInterface[];
    public readonly Rollback: (_Error: Error, _Client: PoolClient, _Done: () => void) => void;
    public readonly Commit: (_Client: PoolClient, _Done: () => void, _TransactionData: any) => void;

    constructor() {
        this.Rollback = (_Error: Error, _Client: PoolClient, _Done: () => void) => {
            console.log(_Error);
            return _Client.query("ROLLBACK", err => {
                if (err) {
                    console.log(err);
                    return err;
                }
                _Done();
                return _Error;
            });
        }
        this.Commit = (_Client: PoolClient, _Done: () => void, _TransactionData: any) => {
            return _Client.query("COMMIT", err => {
                if (err) this.Rollback(err, _Client, _Done);
                _Done();
                return _TransactionData;
            });
        }
    }
}