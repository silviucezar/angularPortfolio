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
                `CREATE TABLE main_profile_details (
                    image TEXT NOT NULL,
                    firstname VARCHAR(20) NOT NULL,
                    lastname VARCHAR(50) NOT NULL,
                    currentrole VARCHAR(50) NOT NULL,
                    email VARCHAR(50) NOT NULL,
                    age SMALLINT NOT NULL,
                    birthdate TEXT NOT NULL,
                    gender VARCHAR(10) NOT NULL,
                    phoneno VARCHAR(20) NOT NULL,
                    id INT NOT NULL PRIMARY KEY
                )`,
                `INSERT INTO main_profile_details VALUES (
                    'https://misfitinteractive.com/wp-content/uploads/2018/01/banner-portfolio.jpg',
                    'Silviu-Cezar',
                    'Cimpoeru',
                    'Front End Developer - REI Development Services',
                    'cimpoeru.silviu@gmail.com',
                    '27',
                    '19-Dec-1991',
                    'M',
                    '+40766 516 510',
                    1
                )`
            ],
            [
                `CREATE TABLE component_data (
                    string_key VARCHAR(20) NOT NULL,
                    text TEXT NOT NULL,
                    locale VARCHAR(10) NOT NULL,
                    prefix TEXT NOT NULL PRIMARY KEY,

                )`,
                `INSERT INTO component_data VALUES
                ('AboutMe','dummy_placeholder_about_me','AboutMe_ro_RO'),
                ('AboutMe','dummy_placeholder_about_me','AboutMe_en_US'),
                ('Skills','dummy_placeholder_skills','Skills_ro_RO'),
                ('Skills','dummy_placeholder_skills','Skills_en_US'),
                ('WorkExperience','dummy_placeholder_work_experience','WorkExperience_ro_RO'),
                ('WorkExperience','dummy_placeholder_work_experience','WorkExperience_en_US'),
                ('Education','dummy_placeholder_education','Education_ro_RO'),
                ('Education','dummy_placeholder_education','Education_en_US'),
                ('References','dummy_placeholder_references','References_ro_RO'),
                ('References','dummy_placeholder_references','References_en_US'),
                ('LeaveMessage','dummy_placeholder_Leave_Message','LeaveMessage_ro_RO'),
                ('LeaveMessage','dummy_placeholder_Leave_Message','LeaveMessage_en_US')
                `
            ],
            [
                `CREATE TABLE text_translations (
                    text TEXT NOT NULL,
                    locale VARCHAR(10) NOT NULL,
                    prefix TEXT NOT NULL PRIMARY KEY
                )`,
                `INSERT INTO text_translations (text,locale,prefix) VALUES
                    ('image','all','intro_image_all'),
                    ('Prenume','ro_RO','intro_first_name_RO'),
                    ('First Name','en_US','intro_first_name_EN'),
                    ('Nume','ro_RO','intro_last_name_RO'),
                    ('Last Name','en_US','intro_last_name_en'),
                    ('Rolul Actual','ro_RO','intro_current_role_RO'),
                    ('Current Role','en_US','intro_current_role_en'),
                    ('Email','ro_RO','intro_email_RO'),
                    ('Email','en_US','intro_email_en'),
                    ('Vârsta','ro_RO','intro_age_RO'),
                    ('Age','en_US','intro_age_en'),
                    ('Data Nașterii','ro_RO','intro_birth_date_RO'),
                    ('Birth Date','en_US','intro_birth_date_en'),
                    ('Genul','ro_RO','intro_gender_RO'),
                    ('Gender','en_US','intro_gender_en'),
                    ('Telefon','ro_RO','intro_phone_no_RO'),
                    ('Phone No.','en_US','intro_phone_no_en'),
                    ('Despre Mine','ro_RO','intro_about_me_RO'),
                    ('About Me','en_US','intro_about_me_en')
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