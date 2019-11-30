import { QueryModel } from "../_Models/db_QueryModel";
import { PGQuery } from "../_Services/PGQuery";
import { PoolClient } from "pg";

export class DBMain {

    private QueryPool = new QueryModel();
    constructor() {
        console.log("TEST")
    }
}