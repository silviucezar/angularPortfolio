import { PGQuery } from "../_Services/PGQuery";
import { PoolClient } from "pg";

export class DBCreation {

    private PGQuery: PGQuery;
    private PromiseArr: any[] = [];
    private QueryArrays: string[][];
    constructor() {
        this.PGQuery = new PGQuery();
        this.QueryArrays = [
            [
                `CREATE TABLE params (
                        params TEXT NOT NULL,
                        id int NOT NULL PRIMARY KEY
                    )`,
                `INSERT INTO params(params,id) VALUES ('{}',1)`
            ],
            [
                `CREATE TABLE mainprofiledetails (
                    image TEXT NOT NULL,
                    firstname VARCHAR(20) NOT NULL,
                    lastname VARCHAR(50) NOT NULL,
                    email VARCHAR(50) NOT NULL,
                    latestrole VARCHAR(50) NOT NULL,
                    employer VARCHAR(255) NOT NULL,
                    age SMALLINT NOT NULL,
                    birthdate TEXT NOT NULL,
                    gender VARCHAR(10) NOT NULL,
                    phoneno VARCHAR(20) NOT NULL,
                    id INT NOT NULL PRIMARY KEY
                )`,
                `INSERT INTO mainprofiledetails VALUES (
                    'https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659652_960_720.png',
                    'Silviu-Cezar',
                    'Cimpoeru',
                    'cimpoeru.silviu@gmail.com',
                    'Front End Developer',
                    'REI Development Services',
                    '27',
                    '19-Dec-1991',
                    'M',
                    '+40766 516 510',
                    1
                )`
            ],
            [
                `CREATE TABLE text_translations (
                    text TEXT NOT NULL,
                    locale VARCHAR(10) NOT NULL,
                    prefix TEXT NOT NULL PRIMARY KEY
                )`,
                `INSERT INTO text_translations (text,locale,prefix) VALUES
                    ('image','all','intro_image_all'),
                    ('Rolul Actual','ro_ro','intro_current_role_ro'),
                    ('Current Role','en_US','intro_current_role_en'),
                    ('Nume','ro_ro','intro_last_name_ro'),
                    ('Last Name','en_US','intro_last_name_en'),
                    ('Prenume','ro_ro','intro_first_name_ro'),
                    ('First Name','en_US','intro_first_name_en'),
                    ('Despre Mine','ro_ro','intro_about_me_short_ro'),
                    ('About Me','en_US','intro_about_me_short_en'),
                    ('intro_about_me_detailed_ro','ro_ro','intro_about_me_detailed_ro'),
                    ('intro_about_me_detailed_en','en_US','intro_about_me_detailed_en'),
                    ('Vârsta','ro_ro','intro_age_ro'),
                    ('Age','en_US','intro_age_en'),
                    ('Data Nașterii','ro_ro','intro_birth_date_ro'),
                    ('Birth Date','en_US','intro_birth_date_en'),
                    ('Genul','ro_ro','intro_gender_ro'),
                    ('Gender','en_US','intro_gender_en'),
                    ('Email','ro_ro','intro_email_ro'),
                    ('Email','en_US','intro_email_en'),
                    ('Telefon','ro_ro','intro_phone_no_ro'),
                    ('Phone No.','en_US','intro_phone_no_en')
                `
            ]
        ];
    }

    DoTransactions(_Client: PoolClient, _Done: () => void, TransactionIndex: number, TransactionQuery: string[], resolve: any, reject: any): void {
        _Client.query(TransactionQuery[TransactionIndex], (_TransactionError: any, _TransactionData) => {
            if (_TransactionError) {
                this.PGQuery.Release(_TransactionError, _Client, _Done, reject);
            } else if (TransactionIndex + 1 === TransactionQuery.length) {
                this.PGQuery.Commit(_Client, _Done, _TransactionData, reject, resolve);
            } else {
                this.DoTransactions(_Client, _Done, TransactionIndex + 1, TransactionQuery, resolve, reject);
            }
        });
    }

    createTables(): any {
        for (const Query of this.QueryArrays) {
            this.PromiseArr.push(
                new Promise((resolve: any, reject: any) => {
                    this.PGQuery.Start()
                        .then(ConnectionResult => {
                            const ConnectionResultClient: PoolClient = ConnectionResult._Client;
                            ConnectionResultClient.query("BEGIN", _BeginErr => {
                                this.DoTransactions(ConnectionResult._Client, ConnectionResult._Done, 0, Query, resolve, reject);
                            });
                        })
                        .catch(ConnectionResult => {
                            ConnectionResult._Done();
                            reject(ConnectionResult._Error);
                        });
                }));
        }
        return this.PromiseArr;
    }
}