import { Injectable } from '@angular/core';
// import { DataService } from './data.service';
import { Lang, LangTemplate, ComponentsTemplate, HeaderFooterMetadata, LocaleTranslations, LocaleCategory, CategoryDetails, UrlSubscription } from '../Interfaces/interfaces';
import { Subject, BehaviorSubject } from 'rxjs';
import { LocaleService } from './locale.service';
import { Locale } from '../Interfaces/interfaces';
import { DataService } from './data.service';
import { UrlListenerService } from './url-listener.service';

@Injectable({
  providedIn: 'root'
})
export class PageLogic implements ExistingMetadata {

  public skillsState$ = new Subject<boolean>();
  public jobsState$ = new Subject<boolean>();
  public loadingMetadata$ = new Subject<boolean>();
  public currentLocaleTranslations$: BehaviorSubject<LocaleTranslations | undefined> = new BehaviorSubject<LocaleTranslations | undefined>(undefined);
  private locale: keyof LangTemplate = 'en_US';
  constructor(
    private dataService: DataService,
    private localeService: LocaleService,
    private urlListenerService: UrlListenerService,

  ) {
    this.urlListenerService.start();
    this.localeService.currentLocale$.subscribe((currentLocale: Locale) => {
      const localeTranslations: LocaleTranslations = {
        locale: currentLocale.locale,
        translations: (() => {
          const trasnlationsTempArr: string[] = [];
          for (let keys of Object.keys(currentLocale.categoriesTitle)) {
            trasnlationsTempArr.push((currentLocale.categoriesTitle[keys as keyof LocaleCategory] as CategoryDetails)[`${currentLocale.locale}_Title` as 'ro_RO_Title' | 'en_US_Title']);
          }
          return trasnlationsTempArr;
        })(),
        keys: currentLocale.categoriesTitle,
        currentUrl: this.urlListenerService.getCurrentUrl()
      }
      console.log(localeTranslations)
      this.locale = localeTranslations.locale;
      this.currentLocaleTranslations$.next(localeTranslations);
    });
  }

  fetchComponentsMetadata<K extends keyof ComponentsTemplate>(metadata: K): Promise<ComponentsTemplate[K]> {
    return this.dataService.fetchRouteMetadata(metadata, this.locale);
  }

  fetchHeaderFooterMetadata(): Promise<HeaderFooterMetadata> {
    return this.dataService.fetchRouteMetadata('header_footer', this.locale);
  }

  updateLocale(locale: keyof LangTemplate) { this.localeService.setCurrentLocale(locale); }

  setSkillsLoadingState() {
    this.skillsState$.next(true);
  }

  setJobsLoadingState() {
    this.jobsState$.next(true);
  }
}

class ExistingMetadata {
  constructor() { }
}