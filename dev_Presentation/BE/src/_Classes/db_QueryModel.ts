import { Pool } from "pg";

export class QueryPoolModel {

    private QueryPoolModel: Pool;

    constructor() {
        this.QueryPoolModel = new Pool({
            user: "postgres",
            host: "localhost",
            password: "HvJHTsQm9KteBLfKMytCYBkW",
            database: "postgres",
            port: 5432
        });
    }
}