import { QueryModel } from "../_Classes/db_QueryModel";
import { PGQuery } from "../_Interfaces/PGQuery";

export class DBCreation {

    private QueryModel: QueryModel;
    private QueryArrays: PGQuery[];

    constructor() {
        this.QueryModel = new QueryModel();
        this.QueryArrays = [
            {
                IsTransaction: false,
                DbActionSingle: "SELECT NOW()"
            }, {
                IsTransaction: true,
                DbActionTransaction: [
                    `CREATE TABLE mainprofiledetails (
                        id SERIAL,
                        firstname VARCHAR(20),
                        midlename VARCHAR(20),
                        lastname VARCHAR(50),
                        email VARCHAR(50),
                        latestrole VARCHAR(50),
                        age TINYINT,
                        birthdate TEXT,
                        gender VARCHAR(10),
                        phoneno TINYINT
                        )`
                ]
            }
        ];
    };

    createTables(overwrite:boolean): Promise<any> {
        const promiseArr: any[] = [];

        for (const [QueryIndex,Query] of this.QueryArrays.entries()) {
            promiseArr.push(
                new Promise((resolve: any, reject: any) => {
                    if (!overwrite) {
                        if (Query.IsTransaction) {
                            this.QueryModel.Pool.query(Query.Begin,(DBActionError,DBActionData)=>{
                                console.log(QueryIndex);
                            });
                        } else {
                            this.QueryModel.Pool.query(Query.DbActionSingle, (DBActionError, DBActionData) => {
                                if (DBActionError) reject(DBActionError);
                                resolve(DBActionData);
                            });
                        }
                    } else {
                        console.log("noooooooope");
                    }

                }));
        }

        return Promise.all(promiseArr).then(result => {
            console.log(result);
            console.log("done");
        });
    }
}