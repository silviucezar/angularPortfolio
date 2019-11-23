import { Pool } from "pg";

export class QueryModel {

    public readonly Pool: Pool;

    constructor() {
        this.Pool = new Pool({
            user: "postgres",
            host: "localhost",
            password: "HvJHTsQm9KteBLfKMytCYBkW",
            database: "postgres",
            port: 5432
        });
    }
}