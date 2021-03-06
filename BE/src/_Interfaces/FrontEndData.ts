export interface DBDataTemplate {
    text?: string;
    prefix?: string;
    string_key?: string;
    info?: any
}

export interface FrontEndDataTemplate {
    ro_RO?: ComponentsDataStructure,
    en_US?: ComponentsDataStructure;

}

interface ComponentsDataStructure {
    headerData?: HeaderTemplate,
    componentsData: ComponentsTemplate | {},
    footerData?: FooterTemplate
}

interface HeaderTemplate {
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

interface ComponentsTemplate {
    about_me: InitialDataKey;
    skills: InitialDataKey;
    jobs: InitialDataKey;
    education: InitialDataKey;
    references: InitialDataKey;
    leave_message: InitialDataKey;
}

interface FooterTemplate {
    intro_footer_fetching_data?: InitialDataKey;
    intro_footer_settings?: InitialDataKey;
}

interface InitialDataKey {
    text: any;
    info?: any;
}
