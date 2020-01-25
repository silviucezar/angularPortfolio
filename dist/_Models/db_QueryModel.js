"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
class QueryModel {
    constructor() {
        this.Pool = new pg_1.Pool({
            user: "postgres",
            host: "localhost",
            password: "HvJHTsQm9KteBLfKMytCYBkW",
            database: "postgres",
            port: 5432
        });
        this.Client = new pg_1.Client({
            user: "postgres",
            host: "localhost",
            password: "HvJHTsQm9KteBLfKMytCYBkW",
            database: "postgres",
            port: 5432
        });
    }
}
exports.QueryModel = QueryModel;
//# sourceMappingURL=db_QueryModel.js.map