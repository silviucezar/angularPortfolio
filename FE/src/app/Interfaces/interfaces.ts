import { ViewContainerRef } from '@angular/core';

export interface LangTemplate {
    ro_RO: 'ro_RO';
    en_US: 'en_US';
}

export interface Lang<T> {
    ro_RO: T | undefined;
    en_US: T | undefined;
}

export interface HeaderTemplate {
    image?: string;
    intro_header_first_name?: any;
    intro_header_current_role?: any;
    intro_header_email?: any;
    intro_header_age?: any;
    intro_header_birth_date?: any;
    intro_header_gender?: any;
    intro_header_phone_no?: any;
    intro_header_about_me?: any;
}

export interface FooterTemplate {
    intro_footer_fetching_data: any;
    intro_footer_settings: any;
    phone_no: string;
    linked_in: string;
}

export interface InitialMetadata {
    headerMetadata?: HeaderTemplate;
    menuMetadata?: string[];
    footerMetadata?: FooterTemplate;
}

export interface ContainerRefs {
    about_me: ViewContainerRef;
    skills: ViewContainerRef;
    jobs: ViewContainerRef;
    education: ViewContainerRef;
    references: ViewContainerRef;
    leave_message: ViewContainerRef;
}

export interface ComponentsTemplate {
    about_me: AboutMe;
    skills: Skills;
    jobs: Jobs;
    education: Education;
    references: References;
    leave_message: LeaveMessage;
    initial: InitialMetadata;
}

export interface Skills { }
export interface Jobs { }
export interface Education { }
export interface References { }
export interface LeaveMessage { }

export interface AboutMe {
    intro?: string;
    current_goal?: string;
    hobbies?: string;
    generalKnowledge?: string[];
}

export interface UrlSubscription {
    dataToFetch: keyof ComponentsTemplate;
    path: string;
}

export interface Locale {
    locale: keyof LangTemplate;
    categoriesTitle: LocaleCategory
}

export interface LocaleCategory {
    about_me: CategoryDetails;
    skills: CategoryDetails;
    jobs: CategoryDetails;
    education: CategoryDetails;
    references: CategoryDetails;
    leave_message: CategoryDetails;
}
export interface CategoryDetails {
    ro_RO_Title: string;
    en_US_Title: string;
    url: string;
}

export interface LocaleTranslations {
    locale: keyof LangTemplate;
    currentUrl: string;
}

export interface Viewport {
    activeOrientation: string;
    inactiveOrientation: string;
    CSS: {
        portrait: {
            loaded: boolean,
            element: HTMLLinkElement
        };
        landscape: {
            loaded: boolean,
            element: HTMLLinkElement
        };
    };
    contentComponentsPosition?: ContentComponentsPosition
}

export interface ContentComponentsPosition {
    about_me: ComponentPosition;
    education: ComponentPosition;
    references: ComponentPosition;
    leave_message: ComponentPosition;
}

export interface ComponentPosition {
    component: HTMLElement;
    url: string;
}


export interface RequestDetails {
    activeRequestCount : number,
    url:string;
  }