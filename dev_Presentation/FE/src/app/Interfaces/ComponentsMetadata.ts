import { ViewContainerRef } from '@angular/core';

export interface ComponentsMetadata {
    header: Lang;
    components: ComponentsData;
    footer: Lang;
    dataToFetch: string;
    currentLocale: string;
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

export interface AboutMeMetadata {
    sectionTitle: string;
    sectionDetails: string;
    sectionGoal: string;
    sectionSpareTime: string;
}

export interface SkillsMetadata {
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


export interface JobsMetadata {
    sectionTitle: string;
    sectionDetails: string;
}

export interface EducationMetadata {
    sectionTitle: string;
    sectionDetails: string;
}

export interface ReferencesMetadata {
    sectionTitle: string;
    sectionDetails: string;
}

export interface LeaveMessageMetadata {
    sectionTitle: string;
    sectionDetails: string;
}

interface SubCategoryDetails {
    img?: string;
    details: string | string[];
}

export interface ContainerRefs {
    about_me: ViewContainerRef;
    skills: ViewContainerRef;
    jobs: ViewContainerRef;
    education: ViewContainerRef;
    references: ViewContainerRef;
    leave_message: ViewContainerRef;
}
