import { PGQuery } from "../_Services/PGQuery";
import { PoolClient } from "pg";
import { SelectQuery } from "../_Interfaces/MainDBInterface"

export class DBMain {

    private PGQuery: PGQuery;
    private PromiseArr: any[] = [];
    private QueryArrays: string[][];

    constructor() {
        this.PGQuery = new PGQuery();
    }

    select(Query: SelectQuery): Promise<any> {
        return new Promise((resolve, reject) => {
            this.PGQuery.Start()
                .then(ConnectionResult => {
                    const ConnectionResultClient: PoolClient = ConnectionResult._Client;
                    ConnectionResultClient.query(`SELECT ${Query.Columns} FROM ${Query.Table} ${Query.Where ? Query.Where :""}`, (_SelectError, _SelectData) => {
                        if (_SelectError) { reject(_SelectError); ConnectionResult._Done(); return };
                        ConnectionResult._Done();
                        resolve(_SelectData.rows);
                    })
                })
                .catch(ConnectionResult => {
                    ConnectionResult._Done();
                    reject(ConnectionResult._Error);
                });
        });
    }
}