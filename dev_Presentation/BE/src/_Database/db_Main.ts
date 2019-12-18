import { PGQuery } from "../_Services/PGQuery";
import { PoolClient } from "pg";
import { SelectQuery } from "../_Interfaces/MainDBInterface"

export class DBMain {

    private PGQuery: PGQuery;

    constructor() {
        this.PGQuery = new PGQuery();
    }

    select(QueryConfig: SelectQuery): Promise<object[][]> {
        return new Promise((resolve, reject) => {
            this.PGQuery.Start()
                .then(startResponse => {
                    const CONNECTION_RESULT_CLIENT: PoolClient = startResponse._Client;
                    const PARAMS = QueryConfig.Params ? QueryConfig.Params : null;
                    CONNECTION_RESULT_CLIENT.query(`SELECT ${QueryConfig.Columns} FROM ${QueryConfig.Table} ${QueryConfig.Where ? QueryConfig.Where : ""}`, PARAMS, (err, data) => {
                        console.log(data)
                        if (err) { reject(err); startResponse._Done(); return };
                        startResponse._Done();
                        resolve(data.rows);
                    })
                })
                .catch(startResponse => {
                    console.log(startResponse)
                    startResponse._Done();
                    reject(startResponse._Error);
                });
        });
    }
}