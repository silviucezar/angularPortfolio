import { MysqlError, PoolConnection } from 'mysql';
import { DBQuries } from './dbQueriesText';
import { Query } from '../Interfaces/MainDBInterface';

export class DBQueriesLogic {

    private queryArrays: string[][];

    constructor() {
        this.queryArrays = new DBQuries().createAndInsert;
    }

    initQuery(connection: PoolConnection, action: string, queryDescription?: Query[]): Promise<any>[] {
        switch (action) {
            case 'create':
                return this.startCreatingTables(connection);
            case 'select':
                return this.startSelectingTables(connection, queryDescription);
            case 'insert':
                return this.startInsertingIntoTables(connection, queryDescription);
            default:
                return [new Promise((resolve, reject) => { reject() })];
        }
    }

    startCreatingTables(connection: PoolConnection): Promise<any>[] {
        const promiseArr: Promise<any>[] = [];
        for (const query of this.queryArrays) {
            promiseArr.push(
                new Promise((resolveTableCreation, rejectTableCreation) => {
                    connection.query('BEGIN', (beginErr: MysqlError) => {
                        if (beginErr) rejectTableCreation(beginErr); else {
                            for (const transaction of query) {
                                connection.query(transaction, (queryErr: MysqlError) => {
                                    if (queryErr) rejectTableCreation(queryErr); else resolveTableCreation();
                                });
                            }
                        }
                    });
                })
            );
        }
        return promiseArr;
    }

    startSelectingTables(connection: PoolConnection, tables: Query[] | undefined): Promise<any>[] {
        const promiseArr: Promise<any>[] = [];
        for (const q of tables!) {
            promiseArr.push(
                new Promise((resolveTableSelection, rejectTableSelection) => {
                    connection.query('BEGIN', (beginErr: MysqlError) => {
                        if (beginErr) rejectTableSelection(beginErr); else {
                            const params = q.Params;
                            connection.query(`SELECT ${q.Columns} FROM ${q.Table} ${q.Where ? q.Where : ""}`, params, (queryErr, data) => {
                                if (queryErr) rejectTableSelection(queryErr); else resolveTableSelection(data);
                            });
                        }
                    });
                })
            );
        }
        return promiseArr;
    }

    startInsertingIntoTables(connection: PoolConnection, tables: Query[] | undefined): Promise<any>[] {
        const promiseArr: Promise<any>[] = [];
        for (const q of tables!) {
            promiseArr.push(
                new Promise((resolveTableSelection, rejectTableSelection) => {
                    connection.query('BEGIN', (beginErr: MysqlError) => {
                        if (beginErr) rejectTableSelection(beginErr); else {
                            const params = q.Params;
                            connection.query(`INSERT INTO ${q.Table} (${q.Columns}) VALUES(${q.RowData})`, params, (queryErr, data) => {
                                if (queryErr) rejectTableSelection(queryErr); else resolveTableSelection(data);
                            });
                        }
                    });
                })
            );
        }
        return promiseArr;
    }
}