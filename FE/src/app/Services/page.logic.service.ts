import { Injectable, Renderer2, Inject, ElementRef } from '@angular/core';
import { LangTemplate, ComponentsTemplate, InitialMetadata, LocaleTranslations } from '../Interfaces/interfaces';
import { BehaviorSubject } from 'rxjs';
import { DataService } from './data.service';
import { UrlListenerService } from './url-listener.service';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class PageLogic {

  public skillsState$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public jobsState$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public currentLocaleTranslations$: BehaviorSubject<LocaleTranslations | undefined> = new BehaviorSubject<LocaleTranslations | undefined>(undefined);
  private locale: keyof LangTemplate = 'en_US';
  private previousUrl: string = 'about-me';

  constructor(
    private dataService: DataService,
    private urlListenerService: UrlListenerService,
    @Inject(DOCUMENT) private _document: Document
  ) {
    this.urlListenerService.start();
    this.updateMetadataParams();
    this.urlListenerService.urlSubscriptionBehaviorSubject$.subscribe(() => this.updateMetadataParams());
  }

  sendFeedback(feedback: string): Promise<Object> {
    return this.dataService.sendFeedback(feedback);
  }

  fetchComponentsMetadata<K extends keyof ComponentsTemplate>(metadata: K): Promise<ComponentsTemplate[K]> {
    return this.dataService.fetchRouteMetadata(metadata, this.locale);
  }

  fetchInitialMetadata(): Promise<InitialMetadata> {
    return this.dataService.fetchRouteMetadata('initial', this.locale);
  }

  objectKeys(object: JSON): string[] {
    try { return Object.keys(object); } catch (e) { return []; };
  }

  updateMetadataParams(locale?: keyof LangTemplate) {
    const localeTranslations: LocaleTranslations = {
      locale: locale || this.locale || 'en_US',
      currentUrl: this.urlListenerService.currentUrl
    }
    this.locale = localeTranslations.locale;
    this.currentLocaleTranslations$.next(localeTranslations);
  };

  setPreviousUrl(previousUrl: string) {
    this.previousUrl = previousUrl;
  }

  closeSkillsJobsModal() {
    this.skillsState$.next(false);
    this.jobsState$.next(false);
  }

  hideModalSibling(sibling: string) {
    (this[`${sibling}State$` as 'skillsState$' | 'jobsState$']).next(false);
    (this[`${sibling === 'skills' ? 'jobs' : 'skills'}State$` as 'skillsState$' | 'jobsState$']).next(true);
  }

  setModalTabsState(tab: string) {
    this[`${tab === 'skills' ? 'jobs' : 'skills'}State$` as 'skillsState$' | 'jobsState$'].next(true);
  }

  resetSkillsJobsModal() {
    this.skillsState$.next(false);
    this.jobsState$.next(false);
  }

  fadeInContent() {
    setTimeout(() => {
      const contentContainer = this._document.querySelector('.appGlobalContent')!;
      contentContainer.querySelectorAll('.fadeMeIn:not(.fadedIn)').forEach((element: Element, index: number) => {
        if (element.getBoundingClientRect().top < contentContainer.getBoundingClientRect().bottom) {
          setTimeout(() => {
            element.classList.add('fadedIn');
          }, 75 * index);
        }
      });
    }, 200);
  }
}