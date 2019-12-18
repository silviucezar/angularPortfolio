import { ABOUT_ME_RO, ABOUT_ME_EN } from '../FE_Data_Objects/aboutMe';
import { SKILLS_RO, SKILLS_EN } from '../FE_Data_Objects/skills';
import { WORK_EXPERIENCE_RO,WORK_EXPERIENCE_EN } from '../FE_Data_Objects/workExperience';
import { EDUCATION_RO,EDUCATION_EN } from '../FE_Data_Objects/education';
import { REFERENCES_RO,REFERENCES_EN } from '../FE_Data_Objects/references';
import { LEAVE_MESSAGE_RO,LEAVE_MESSAGE_EN } from '../FE_Data_Objects/LeaveMessage';

export class DBQuries {

    public readonly createAndInsert: string[][];

    constructor() {
        this.createAndInsert = [
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
                `CREATE TABLE text_translations (
                    text TEXT NOT NULL,
                    locale VARCHAR(10) NOT NULL,
                    prefix TEXT NOT NULL PRIMARY KEY
                )`,
                `INSERT INTO text_translations (text,locale,prefix) VALUES
                    ('image','all','intro_header_image_all'),
                    ('Prenume','ro_RO','intro_header_first_name_ro_RO'),
                    ('First Name','en_US','intro_header_first_name_en_US'),
                    ('Nume','ro_RO','intro_header_last_name_ro_RO'),
                    ('Last Name','en_US','intro_header_last_name_en_US'),
                    ('Rolul Actual','ro_RO','intro_header_current_role_ro_RO'),
                    ('Current Role','en_US','intro_header_current_role_en_US'),
                    ('Email','ro_RO','intro_header_email_ro_RO'),
                    ('Email','en_US','intro_header_email_en_US'),
                    ('Vârsta','ro_RO','intro_header_age_ro_RO'),
                    ('Age','en_US','intro_header_age_en_US'),
                    ('Data Nașterii','ro_RO','intro_header_birth_date_ro_RO'),
                    ('Birth Date','en_US','intro_header_birth_date_en_US'),
                    ('Genul','ro_RO','intro_header_gender_ro_RO'),
                    ('Gender','en_US','intro_header_gender_en_US'),
                    ('Telefon','ro_RO','intro_header_phone_no_ro_RO'),
                    ('Phone No.','en_US','intro_header_phone_no_en_US'),
                    ('Se trag datele','ro_RO','intro_footer_fetching_data_ro_RO'),
                    ('Fetching Data','en_US','intro_footer_fetching_data_en_US'),
                    ('Setari Site','ro_RO','intro_footer_settings_ro_RO'),
                    ('Site Settings','en_US','intro_footer_settings_en_US')
                `
            ],
            [
                `CREATE TABLE component_data (
                    string_key VARCHAR(50) NOT NULL,
                    text TEXT NOT NULL,
                    locale VARCHAR(10) NOT NULL,
                    prefix TEXT NOT NULL PRIMARY KEY
                )`,
                `INSERT INTO component_data VALUES
                    ('AboutMe_Skills','${JSON.stringify(ABOUT_ME_RO)}','ro_RO','AboutMe_ro_RO'),
                    ('AboutMe_Skills','${JSON.stringify(ABOUT_ME_EN)}','en_US','AboutMe_en_US'),
                    ('AboutMe_Skills_WorkExperience','${JSON.stringify(SKILLS_RO)}','ro_RO','Skills_ro_RO'),
                    ('AboutMe_Skills_WorkExperience','${JSON.stringify(SKILLS_EN)}','en_US','Skills_en_US'),
                    ('Skills_WorkExperience_Education','${JSON.stringify(WORK_EXPERIENCE_RO)}','ro_RO','WorkExperience_ro_RO'),
                    ('Skills_WorkExperience_Education','${JSON.stringify(WORK_EXPERIENCE_EN)}','en_US','WorkExperience_en_US'),
                    ('WorkExperience_Education_References','${JSON.stringify(EDUCATION_RO)}','ro_RO','Education_ro_RO'),
                    ('WorkExperience_Education_References','${JSON.stringify(EDUCATION_EN)}','en_US','Education_en_US'),
                    ('Education_References_LeaveMessage','${JSON.stringify(REFERENCES_RO)}','ro_RO','References_ro_RO'),
                    ('Education_References_LeaveMessage','${JSON.stringify(REFERENCES_EN)}','en_US','References_en_US'),
                    ('References_LeaveMessage','${JSON.stringify(LEAVE_MESSAGE_RO)}','ro_RO','LeaveMessage_ro_RO'),
                    ('References_LeaveMessage','${JSON.stringify(LEAVE_MESSAGE_EN)}','en_US','LeaveMessage_en_US')
                `
            ]
        ];
    }
}