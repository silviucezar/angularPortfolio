import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Locale } from '../Interfaces/Locale';

@Injectable({
  providedIn: 'root'
})
export class LocaleService {

  private currentLocale$ = new BehaviorSubject<Locale>({
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
        ro_RO_Title: 'Experienta Profesionala',
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
        ro_RO_Title: 'Lasati Un Mesaj',
        en_US_Title: 'Leave Message',
        url: 'leave-message'
      }
    }
  });

  constructor() { }

  getCurrentLocale(): BehaviorSubject<Locale> { return this.currentLocale$ };

  setCurrentLocale(): string {
    const currentLocaleValue = this.currentLocale$.value;
    currentLocaleValue.locale = currentLocaleValue.locale === 'ro_RO' ? 'en_US' : 'ro_RO';
    this.currentLocale$.next(currentLocaleValue)
    return currentLocaleValue.locale
  };
}
