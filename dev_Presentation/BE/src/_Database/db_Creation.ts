import { QueryModel } from "../_Classes/db_QueryModel";

export class DBCreation {

    private QueryModel: QueryModel;
    private QueryArrays: string[];

    constructor() {
        this.QueryModel = new QueryModel();
        this.QueryArrays = [
            "SELECT NOW()"
        ];
    };

    createTables(): Promise<any> {
        const promiseArr: any[] = [];

        for (const query of this.QueryArrays) {
            promiseArr.push(
                new Promise((resolve: any, reject: any) => {
                    this.QueryModel.Pool.query(query, (err, data) => {
                        if (err) reject(err);
                        resolve(data);
                    });
                }));
        }

        return Promise.all(promiseArr).then(result => {
            console.log(result);
            console.log("done");
        });
    }
}