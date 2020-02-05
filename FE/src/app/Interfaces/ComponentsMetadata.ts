import { ViewContainerRef } from '@angular/core';
import { HeaderTemplate, FooterTemplate, ComponentsTemplate } from '../Interfaces/FrontEndData';

export interface ComponentsMetadata {
    header: Lang;
    components: ComponentsData;
    footer: Lang;
    dataToFetch: keyof ComponentsData;
    locale: keyof Lang;
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
    ro_RO?: HeaderTemplate | ComponentsTemplate | FooterTemplate;
    en_US?: HeaderTemplate | ComponentsTemplate | FooterTemplate;
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

export interface SkillCategory {
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
