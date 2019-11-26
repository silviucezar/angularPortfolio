import { QueryModel } from "../_Classes/db_QueryModel";
import { PGQuery } from "../_Interfaces/PGQuery";
import { PoolClient } from "pg";

export class DBCreation {

    private QueryModel: QueryModel;
    private PGQuery: PGQuery;
    private PromiseArr: any[] = [];
    private QueryCounter: number = 1;
    private DoTransactions: (
        _Error: Error,
        _Client: PoolClient,
        _Done: () => void,
        TransactionIndex: number,
        TransactionQuery: string[],
        MainQueryIndex: number,
        resolve: any,
        reject: any
    ) => void;
    constructor() {
        this.QueryModel = new QueryModel();
        this.PGQuery = new PGQuery();
        this.PGQuery.QueryArrays = [
            [
                `CREATE TABLE params (
                        params TEXT,
                        id int NOT NULL PRIMARY KEY
                    )`,
                `INSERT INTO params(params,id) VALUES ('{
                        "isParamsTableCreated": "1"
                    }',1)`
            ],
            [
                `CREATE TABLE mainprofiledetails (
                        firstname VARCHAR(20),
                        midlename VARCHAR(20),
                        lastname VARCHAR(50),
                        email VARCHAR(50),
                        latestrole VARCHAR(50),
                        age SMALLINT,
                        birthdate TEXT,
                        gender VARCHAR(10),
                        phoneno SMALLINT,
                        id INT NOT NULL PRIMARY KEY
                        )`
            ]
        ];

        this.DoTransactions = (_Error: Error, _Client: PoolClient, _Done: () => void, TransactionIndex: number, TransactionQuery: [], MainQueryIndex: number, resolve: any, reject: any) => {
            _Client.query(TransactionQuery[TransactionIndex], (_TransactionError: any, _TransactionData) => {
                if (_TransactionError) {
                    this.PGQuery.Release(_TransactionError, _Client, _Done, reject);
                    if (_TransactionError && _TransactionError.code.match(/42P01|42P07/)) {
                        this.createTables(MainQueryIndex + 1);
                    }
                } else {
                    if (TransactionIndex + 1 === TransactionQuery.length) {
                        this.PGQuery.Commit(_Client, _Done, _TransactionData, reject, resolve);
                        if (MainQueryIndex < this.PGQuery.QueryArrays.length) this.createTables(MainQueryIndex + 1);
                    } else {
                        this.DoTransactions(_Error, _Client, _Done, TransactionIndex + 1, TransactionQuery, MainQueryIndex, resolve, reject);
                    }
                }
            });
        }
    }

    createTables(MainQueryIndex: number, AdditionalFuctionality?: boolean, _AdditionalFuctionality?: () => void): Promise<any> {
        if (AdditionalFuctionality) _AdditionalFuctionality();
        if (MainQueryIndex === this.PGQuery.QueryArrays.length) {
            console.log(MainQueryIndex === this.PGQuery.QueryArrays.length, MainQueryIndex, this.PGQuery.QueryArrays.length)
            return Promise.all(this.PromiseArr).then(result => {
                console.log(result);
                console.log("done");
            });
        } else {
            const TransactionQuery = this.PGQuery.QueryArrays[MainQueryIndex];
            this.PromiseArr.push(
                new Promise((resolve: any, reject: any) => {
                    this.QueryModel.Pool.connect((_Error, _Client, _Done) => {
                        if (_Error) { this.PGQuery.Release(_Error, _Client, _Done, reject); return; }
                        _Client.query("BEGIN", _BeginErr => {
                            if (_BeginErr) { this.PGQuery.Release(_BeginErr, _Client, _Done, reject); return; }
                            this.DoTransactions(_Error, _Client, _Done, 0, TransactionQuery, MainQueryIndex, resolve, reject);
                        });
                    });
                }));
        }
    }
}