import { AboutMeMetadata, SkillsMetadata, LeaveMessageMetadata, JobsMetadata, EducationMetadata, ReferencesMetadata } from './ComponentsMetadata';

export interface FrontEndData {
    ro_RO?: ComponentsDataStructure,
    en_US?: ComponentsDataStructure;
}

export interface ComponentsDataStructure {
    headerData?: HeaderTemplate,
    componentsData: ComponentsTemplate,
    footerData?: FooterTemplate
}

export interface HeaderTemplate {
    image?: string;
    intro_header_first_name?: InitialDataKey;
    intro_header_current_role?: InitialDataKey;
    intro_header_email?: InitialDataKey;
    intro_header_age?: InitialDataKey;
    intro_header_birth_date?: InitialDataKey;
    intro_header_gender?: InitialDataKey;
    intro_header_phone_no?: InitialDataKey;
    intro_header_about_me?: InitialDataKey;
}

export interface ComponentsTemplate {
    about_me: AboutMeMetadata;
    skills: SkillsMetadata;
    jobs: JobsMetadata;
    education: EducationMetadata;
    references: ReferencesMetadata;
    leave_message: LeaveMessageMetadata;
}

export interface FooterTemplate {
    intro_footer_fetching_data?: InitialDataKey;
    intro_footer_settings?: InitialDataKey;
}

interface InitialDataKey {
    text: string;
    info?: {};
}
