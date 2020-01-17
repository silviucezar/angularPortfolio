export interface ComponentsMetadata {
    header: Lang;
    components: ComponentsData;
    footer: Lang;
}

export interface ComponentsData {
    about_me: Lang;
    skills: Lang;
    jobs: Lang;
    education: Lang;
    references: Lang;
    leave_message: Lang;
}

export interface Lang {
    ro_RO?: PageSectionsTranslations;
    en_US?: PageSectionsTranslations;
}

export interface PageSectionsTranslations {
    intro_header_image_all?: HeaderFooterTranslationKeys;
    intro_header_first_name?: HeaderFooterTranslationKeys;
    intro_header_last_name?: HeaderFooterTranslationKeys;
    intro_header_current_role?: HeaderFooterTranslationKeys;
    intro_header_email?: HeaderFooterTranslationKeys;
    intro_header_age?: HeaderFooterTranslationKeys;
    intro_header_birth_date?: HeaderFooterTranslationKeys;
    intro_header_gender?: HeaderFooterTranslationKeys;
    intro_header_phone_no?: HeaderFooterTranslationKeys;
    intro_footer_fetching_data?: HeaderFooterTranslationKeys;
    intro_footer_settings?: HeaderFooterTranslationKeys;
    about_me?: AboutMeMetadata;
    skills?: SkillsMetadata;
    jobs?: JobsMetadata;
    education?: EducationMetadata;
    references?: ReferencesMetadata;
    leave_message?: LeaveMessageMetadata;

}

interface HeaderFooterTranslationKeys {
    text: string;
    info: string;
}

interface AboutMeMetadata {
    sectionTitle: string;
    sectionDetails: string;
    sectionGoal: string;
    sectionSpareTime: string;
}

interface SkillsMetadata {
    sectionTitle: string;
    SkillCategory: SkillCategory;

}

interface SkillCategory {
    Typescript: SubCategoryDetails;
    Javascript: SubCategoryDetails;
    NodeJS: SubCategoryDetails;
    Database: SubCategoryDetails;
    Other: SubCategoryDetails;
}


interface JobsMetadata {
    sectionTitle: string;
    sectionDetails: string;
}

interface EducationMetadata {
    sectionTitle: string;
    sectionDetails: string;
}

interface ReferencesMetadata {
    sectionTitle: string;
    sectionDetails: string;
}

interface LeaveMessageMetadata {
    sectionTitle: string;
    sectionDetails: string;
}

interface SubCategoryDetails {
    img?: string;
    details: string | string[];
}