// import { createConnection, Connection, MysqlError } from 'mysql';
import { DBFlow } from './dbFlow';
import { Query } from '../Interfaces/MainDBInterface';

export class DB extends DBFlow {

    constructor() {
        super();
    }

    createTables(): Promise<any> { return this.start('create'); }

    selectTables(tables: Query[]) { return this.start('select', tables); };

    insertIntoTables(tables: Query[]) { return this.start('insert', tables); };
}