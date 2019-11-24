import { Pool, Client } from "pg";

export class QueryModel {

    public readonly Pool: Pool;
    public readonly Client: Client;

    constructor() {
        this.Pool = new Pool({
            user: "postgres",
            host: "localhost",
            password: "HvJHTsQm9KteBLfKMytCYBkW",
            database: "postgres",
            port: 5432
        });

        this.Client = new Client({
            user: "postgres",
            host: "localhost",
            password: "HvJHTsQm9KteBLfKMytCYBkW",
            database: "postgres",
            port: 5432
        });
    }
}