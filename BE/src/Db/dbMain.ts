// import { createConnection, Connection, MysqlError } from 'mysql';
import { DBFlow } from './dbFlow';
import { SelectQuery } from '../Interfaces/MainDBInterface';

export class DB extends DBFlow {

    constructor() {
        super();
    }

    createTables(): Promise<any> { return this.start('create'); }

    selectTables(tables: SelectQuery[]) { return this.start('select', tables); };
}