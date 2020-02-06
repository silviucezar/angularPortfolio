export interface RowDataPacket {
    text:string[];
    prefix:string;
}

export interface FrontEndData {
    headerData?: HeaderTemplate,
    componentsData: ComponentsTemplate,
    footerData?: FooterTemplate
}

export interface HeaderTemplate {
    image?: string;
    intro_header_first_name?: string;
    intro_header_current_role?: string;
    intro_header_email?: string;
    intro_header_age?: string;
    intro_header_birth_date?: string;
    intro_header_gender?: string;
    intro_header_phone_no?: string;
    intro_header_about_me?: string;
}

export interface ComponentsTemplate {
    about_me?: any;
    skills?: any;
    jobs?: any;
    education?: any;
    references?: any;
    leave_message?: any;
}
export interface FooterTemplate {
    intro_footer_fetching_data?: string;
    intro_footer_settings?: string;
}




