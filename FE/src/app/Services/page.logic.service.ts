import { Injectable } from '@angular/core';
// import { DataService } from './data.service';
import { Lang, LangTemplate, ComponentsTemplate, InitialMetadata, LocaleTranslations, LocaleCategory, CategoryDetails, UrlSubscription } from '../Interfaces/interfaces';
import { Subject, BehaviorSubject } from 'rxjs';
import { Locale } from '../Interfaces/interfaces';
import { DataService } from './data.service';
import { UrlListenerService } from './url-listener.service';
import { LazyService } from './lazy.service';

@Injectable({
  providedIn: 'root'
})
export class PageLogic {

  public skillsState$ = new Subject<boolean>();
  public jobsState$ = new Subject<boolean>();
  public loadingMetadata$ = new Subject<boolean>();
  public currentLocaleTranslations$: BehaviorSubject<LocaleTranslations | undefined> = new BehaviorSubject<LocaleTranslations | undefined>(undefined);
  private locale: keyof LangTemplate = 'en_US';

  constructor(
    private dataService: DataService,
    private urlListenerService: UrlListenerService,
    private lazyService: LazyService
  ) {
    this.urlListenerService.start();
    this.updateMetadataParams();
    this.urlListenerService.urlSubscriptionBehaviorSubject$.subscribe((urlSubscription: UrlSubscription) => this.updateMetadataParams());
  }

  fetchComponentsMetadata<K extends keyof ComponentsTemplate>(metadata: K): Promise<ComponentsTemplate[K]> {
    return this.dataService.fetchRouteMetadata(metadata, this.locale);
  }

  fetchInitialMetadata(): Promise<InitialMetadata> {
    return this.dataService.fetchRouteMetadata('initial', this.locale);
  }

  setSkillsLoadingState() {
    this.skillsState$.next(true);
  }

  setJobsLoadingState() {
    this.jobsState$.next(true);
  }

  updateMetadataParams(locale?: keyof LangTemplate) {
    const localeTranslations: LocaleTranslations = {
      locale: locale || this.locale || 'en_US',
      currentUrl: this.urlListenerService.getCurrentUrl()
    }
    // this.lazyService.load(this.urlListenerService.getCurrentUrl()).then(()=>)
    this.locale = localeTranslations.locale;
    this.currentLocaleTranslations$.next(localeTranslations);
  };
}