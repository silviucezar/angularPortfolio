import { ABOUT_ME_RO_RO, ABOUT_ME_EN_US } from '../feData/aboutMe';
import { SKILLS_RO_RO, SKILLS_EN_US } from '../feData/skills';
import { JOBS_RO_RO, JOBS_EN_US } from '../feData/jobs';
import { EDUCATION_RO_RO, EDUCATION_EN_US } from '../feData/education';
import { REFERENCES_RO_RO, REFERENCES_EN_US } from '../feData/references';
import { LEAVE_MESSAGE_RO_RO, LEAVE_MESSAGE_EN_US } from '../feData/leaveMessage';
import { HEADER_RO_RO, HEADER_EN_US } from '../feData/header';
import { FOOTER_RO_RO, FOOTER_EN_US } from '../feData/footer';

export class DBQuries {

    public createAndInsert: string[][];

    constructor() {
        this.createAndInsert = [
            [
                `CREATE TABLE header_data (
                    string_key VARCHAR(50) NOT NULL,
                    text TEXT NOT NULL,
                    locale VARCHAR(10) NOT NULL,
                    prefix VARCHAR(100) NOT NULL PRIMARY KEY
                )`,
                `INSERT INTO header_data VALUES
                ('header','${JSON.stringify(HEADER_RO_RO)}','ro_RO','header_ro_RO'),
                ('header','${JSON.stringify(HEADER_EN_US)}','en_US','header_en_US')
                `
            ],
            [
                `CREATE TABLE component_data (
                    string_key VARCHAR(50) NOT NULL,
                    text TEXT NOT NULL,
                    locale VARCHAR(10) NOT NULL,
                    prefix VARCHAR(100) NOT NULL PRIMARY KEY
                )`,
                `INSERT INTO component_data VALUES
                    ('about_me_skills','${JSON.stringify(ABOUT_ME_RO_RO)}','ro_RO','about_me_ro_RO'),
                    ('about_me_skills','${JSON.stringify(ABOUT_ME_EN_US)}','en_US','about_me_en_US'),
                    ('about_me_skills_jobs','${JSON.stringify(SKILLS_RO_RO)}','ro_RO','skills_ro_RO'),
                    ('about_me_skills_jobs','${JSON.stringify(SKILLS_EN_US)}','en_US','skills_en_US'),
                    ('skills_jobs_education','${JSON.stringify(JOBS_RO_RO)}','ro_RO','jobs_ro_RO'),
                    ('skills_jobs_education','${JSON.stringify(JOBS_EN_US)}','en_US','jobs_en_US'),
                    ('jobs_education_references','${JSON.stringify(EDUCATION_RO_RO)}','ro_RO','education_ro_RO'),
                    ('jobs_education_references','${JSON.stringify(EDUCATION_EN_US)}','en_US','education_en_US'),
                    ('education_references_leave_message','${JSON.stringify(REFERENCES_RO_RO)}','ro_RO','references_ro_RO'),
                    ('education_references_leave_message','${JSON.stringify(REFERENCES_EN_US)}','en_US','references_en_US'),
                    ('references_leave_message','${JSON.stringify(LEAVE_MESSAGE_RO_RO)}','ro_RO','leave_message_ro_RO'),
                    ('references_leave_message','${JSON.stringify(LEAVE_MESSAGE_EN_US)}','en_US','leave_message_en_US')
                `
            ],
            [
                `CREATE TABLE footer_data (
                    string_key VARCHAR(50) NOT NULL,
                    text TEXT NOT NULL,
                    locale VARCHAR(10) NOT NULL,
                    prefix VARCHAR(100) NOT NULL PRIMARY KEY
                )`,
                `INSERT INTO footer_data VALUES
                ('footer','${JSON.stringify(FOOTER_RO_RO)}','ro_RO','footer_ro_RO'),
                ('footer','${JSON.stringify(FOOTER_EN_US)}','en_US','footer_en_US')
                `
            ]
        ];
    }
}