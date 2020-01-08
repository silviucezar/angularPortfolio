import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LocaleDetails } from '../Interfaces/locale.interface';

@Injectable({
  providedIn: 'root'
})
export class LocaleService {

  private currentLocale$ = new BehaviorSubject<LocaleDetails>({
    locale: 'en_US',
    categoriesTitle: {
      AboutMe: {
        ro_RO_Title: 'Despre Mine',
        en_US_Title: 'About Me',
        url: 'about-me'
      },
      Skills: {
        ro_RO_Title: 'Aptitudini',
        en_US_Title: 'Skills',
        url: 'skills'
      },
      WorkExperience: {
        ro_RO_Title: 'Experienta Profesionala',
        en_US_Title: 'Work Experience',
        url: 'work-experience'
      },
      Education: {
        ro_RO_Title: 'Educatie',
        en_US_Title: 'Education',
        url: 'education'
      },
      References: {
        ro_RO_Title: 'Referinte',
        en_US_Title: 'References',
        url: 'references'
      },
      LeaveMessage: {
        ro_RO_Title: 'Lasati Un Mesaj',
        en_US_Title: 'Leave Message',
        url: 'leave-message'
      }
    }
  });

  constructor() { }

  getCurrentLocale(): BehaviorSubject<{}> { return this.currentLocale$ };

  setCurrentLocale() {
    const CURRENT_LOCALE_VALUE = this.currentLocale$.value;
    CURRENT_LOCALE_VALUE.locale = CURRENT_LOCALE_VALUE.locale === 'ro_RO' ? 'en_US' : 'ro_RO';
    this.currentLocale$.next(CURRENT_LOCALE_VALUE)
  };
}
