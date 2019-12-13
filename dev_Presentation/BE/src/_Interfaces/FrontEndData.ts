export interface InitialData {
    image?: string,
    ro_ro?: TranslationString,
    en_en?: TranslationString;

}

interface TranslationString {
    intro_first_name: InitialDataKey;
    intro_current_role: InitialDataKey;
    intro_email: InitialDataKey;
    intro_age: InitialDataKey;
    intro_birth_date: InitialDataKey;
    intro_gender: InitialDataKey;
    intro_phone_no: InitialDataKey;
    intro_about_me: InitialDataKey;
}

interface InitialDataKey {
    title: string;
    details: string;
}

