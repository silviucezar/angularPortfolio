import { Lang } from './ComponentsMetadata';

export interface Locale {
    locale: keyof Lang;
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