export interface InitialData {
    image?:string,
    ro_ro?:InitialDataRo,
    en_en?:InitialDataEn;

}

interface InitialDataRo {
    intro_first_name_ro:InitialDataKey;
    intro_current_role_ro:InitialDataKey;
    intro_email_ro:InitialDataKey;
    intro_age_ro:InitialDataKey;
    intro_birth_date_ro:InitialDataKey;
    intro_gender_ro:InitialDataKey;
    intro_phone_no_ro:InitialDataKey;
    intro_about_me_ro:InitialDataKey;
}

interface InitialDataEn {
    intro_first_name_en:InitialDataKey;
    intro_current_role_en:InitialDataKey;
    intro_email_en:InitialDataKey;
    intro_age_en:InitialDataKey;
    intro_birth_date_en:InitialDataKey;
    intro_gender_en:InitialDataKey;
    intro_phone_no_en:InitialDataKey;
    intro_about_me_en:InitialDataKey;
}

interface InitialDataKey {
    title:string;
    details:string;
}

