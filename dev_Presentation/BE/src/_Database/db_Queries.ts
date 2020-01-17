import { AboutMeRo, AboutMeEn } from '../FE_Data_Objects/aboutMe';
import { SkillsRo, SkilsEn } from '../FE_Data_Objects/skills';
import { JobsRo, JobsEn } from '../FE_Data_Objects/jobs';
import { EducationRo, EducationEn } from '../FE_Data_Objects/education';
import { ReferencesRo, ReferencesEn } from '../FE_Data_Objects/references';
import { LeaveMessageRo, LeaveMessageEn } from '../FE_Data_Objects/leaveMessage';

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
                    ('about_me_skills','${JSON.stringify(AboutMeRo)}','ro_RO','about_me_ro_RO'),
                    ('about_me_skills','${JSON.stringify(AboutMeEn)}','en_US','about_me_en_US'),
                    ('about_me_skills_jobs','${JSON.stringify(SkillsRo)}','ro_RO','skills_ro_RO'),
                    ('about_me_skills_jobs','${JSON.stringify(SkilsEn)}','en_US','skills_en_US'),
                    ('skills_jobs_education','${JSON.stringify(JobsRo)}','ro_RO','jobs_ro_RO'),
                    ('skills_jobs_education','${JSON.stringify(JobsEn)}','en_US','jobs_en_US'),
                    ('jobs_education_references','${JSON.stringify(EducationRo)}','ro_RO','education_ro_RO'),
                    ('jobs_education_references','${JSON.stringify(EducationEn)}','en_US','education_en_US'),
                    ('education_references_leave_message','${JSON.stringify(ReferencesRo)}','ro_RO','references_ro_RO'),
                    ('education_references_leave_message','${JSON.stringify(ReferencesEn)}','en_US','references_en_US'),
                    ('references_leave_message','${JSON.stringify(LeaveMessageRo)}','ro_RO','leave_message_ro_RO'),
                    ('references_leave_message','${JSON.stringify(LeaveMessageEn)}','en_US','leave_message_en_US')
                `
            ]
        ];
    }
}