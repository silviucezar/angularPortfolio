import { PGQuery } from "../_Services/PGQuery";
import { PoolClient } from "pg";

export class DBMain {

    private PGQuery = new PGQuery();
    constructor() {
        console.log("TEST")
    }
}