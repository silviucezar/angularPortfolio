export interface LocaleDetails {
    locale?:string;
    categoriesTitle?:Category;
}

interface Category {
    AboutMe:CategoryDetails;
    Skills:CategoryDetails;
    WorkExperience:CategoryDetails;
    Education:CategoryDetails;
    References:CategoryDetails;
    LeaveMessage:CategoryDetails;
}

interface CategoryDetails {
    ro_RO_Title: string;
    en_US_Title: string;
    url: string;
}