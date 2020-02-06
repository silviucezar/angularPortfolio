"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const aboutMe_1 = require("../feData/aboutMe");
const skills_1 = require("../feData/skills");
const jobs_1 = require("../feData/jobs");
const education_1 = require("../feData/education");
const references_1 = require("../feData/references");
const leaveMessage_1 = require("../feData/leaveMessage");
const header_1 = require("../feData/header");
const footer_1 = require("../feData/footer");
class DBQuries {
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
                ('header','${JSON.stringify(header_1.HEADER_RO_RO)}','ro_RO','header_ro_RO'),
                ('header','${JSON.stringify(header_1.HEADER_EN_US)}','en_US','header_en_US')
                `
            ],
            [
                `CREATE TABLE component_data (
                    text TEXT NOT NULL,
                    prefix VARCHAR(100) NOT NULL PRIMARY KEY
                )`,
                `INSERT INTO component_data VALUES
                    ('${JSON.stringify(aboutMe_1.ABOUT_ME_RO_RO)}','about_me_ro_RO'),
                    ('${JSON.stringify(aboutMe_1.ABOUT_ME_EN_US)}','about_me_en_US'),
                    ('${JSON.stringify(skills_1.SKILLS_RO_RO)}','skills_ro_RO'),
                    ('${JSON.stringify(skills_1.SKILLS_EN_US)}','skills_en_US'),
                    ('${JSON.stringify(jobs_1.JOBS_RO_RO)}','jobs_ro_RO'),
                    ('${JSON.stringify(jobs_1.JOBS_EN_US)}','jobs_en_US'),
                    ('${JSON.stringify(education_1.EDUCATION_RO_RO)}','education_ro_RO'),
                    ('${JSON.stringify(education_1.EDUCATION_EN_US)}','education_en_US'),
                    ('${JSON.stringify(references_1.REFERENCES_RO_RO)}','references_ro_RO'),
                    ('${JSON.stringify(references_1.REFERENCES_EN_US)}','references_en_US'),
                    ('${JSON.stringify(leaveMessage_1.LEAVE_MESSAGE_RO_RO)}','leave_message_ro_RO'),
                    ('${JSON.stringify(leaveMessage_1.LEAVE_MESSAGE_EN_US)}','leave_message_en_US')
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
                ('footer','${JSON.stringify(footer_1.FOOTER_RO_RO)}','ro_RO','footer_ro_RO'),
                ('footer','${JSON.stringify(footer_1.FOOTER_EN_US)}','en_US','footer_en_US')
                `
            ]
        ];
        ;
    }
}
exports.DBQuries = DBQuries;
//# sourceMappingURL=dbQueriesText.js.map