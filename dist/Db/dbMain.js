"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { createConnection, Connection, MysqlError } from 'mysql';
const dbFlow_1 = require("./dbFlow");
class DB extends dbFlow_1.DBFlow {
    constructor() {
        super();
    }
    createTables() { return this.start('create'); }
    selectTables(tables) { return this.start('select', tables); }
    ;
}
exports.DB = DB;
//# sourceMappingURL=dbMain.js.map