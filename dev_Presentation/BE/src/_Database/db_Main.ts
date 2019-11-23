import { QueryModel } from "../_Classes/db_QueryModel";

export class DBMain {

    private QueryPool = new QueryModel();
    constructor() {
        console.log("TEST")
    }
}