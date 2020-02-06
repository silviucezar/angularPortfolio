import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Locale, LangTemplate } from '../Interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class LocaleService {

  public currentLocale$ = new BehaviorSubject<Locale>({
    locale: 'en_US',
    categoriesTitle: {
      about_me: {
        ro_RO_Title: 'Despre Mine',
        en_US_Title: 'About Me',
        url: 'about-me'
      },
      skills: {
        ro_RO_Title: 'Aptitudini',
        en_US_Title: 'Skills',
        url: 'skills'
      },
      jobs: {
        ro_RO_Title: 'Joburi',
        en_US_Title: 'Jobs',
        url: 'jobs'
      },
      education: {
        ro_RO_Title: 'Educatie',
        en_US_Title: 'Education',
        url: 'education'
      },
      references: {
        ro_RO_Title: 'Referinte',
        en_US_Title: 'References',
        url: 'references'
      },
      leave_message: {
        ro_RO_Title: 'Feedback',
        en_US_Title: 'Feedback',
        url: 'leave-message'
      }
    }
  });

  constructor() { }


  setCurrentLocale(locale: keyof LangTemplate) {
    console.log(locale)
    const currentLocaleValue = this.currentLocale$.value;
    currentLocaleValue.locale = locale;
    this.currentLocale$.next(currentLocaleValue);
  };
}
