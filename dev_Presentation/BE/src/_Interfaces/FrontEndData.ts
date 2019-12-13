export interface FrontEndDataTemplate {
    ro_RO?: ComponentsDataStructure,
    en_US?: ComponentsDataStructure;

}

interface ComponentsDataStructure {
    headerData: HeaderTemplate,
    componenetsData: ComponentsTemplate,
    footerData: FooterTemplate
}

interface HeaderTemplate {
    image: string;
    intro_header_first_name: InitialDataKey;
    intro_header_current_role: InitialDataKey;
    intro_header_email: InitialDataKey;
    intro_header_age: InitialDataKey;
    intro_header_birth_date: InitialDataKey;
    intro_header_gender: InitialDataKey;
    intro_header_phone_no: InitialDataKey;
    intro_header_about_me: InitialDataKey;

}

interface ComponentsTemplate {
    AboutMe: InitialDataKey;
    Skills: InitialDataKey;
    WorkExperience: InitialDataKey;
    Education: InitialDataKey;
    References: InitialDataKey;
    LeaveMessage: InitialDataKey;
}

interface FooterTemplate {
    intro_footer_fetching_data: InitialDataKey;
    intro_footer_settings: InitialDataKey;
}

interface InitialDataKey {
    title: string;
    data: {};
}

