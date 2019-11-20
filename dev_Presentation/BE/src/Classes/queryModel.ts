import { Pool, ClientConfig } from "pg";

export class QueryModel {

    private QueryPool: Pool = new Pool({
        user: "postgres",
        host: "http://localhost",
        password: "HvJHTsQm9KteBLfKMytCYBkW",
        database: "postgres",
        port: 5432
    });

    constructor() { }

}