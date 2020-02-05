import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { ComponentsMetadata, Lang, ComponentsData } from '../Interfaces/ComponentsMetadata';
import { Subject, Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { FooterTemplate, HeaderTemplate } from '../Interfaces/FrontEndData';
import { LocaleService } from './locale.service';
import { Locale } from '../Interfaces/Locale';

@Injectable({
  providedIn: 'root'
})
export class PageLogic {

  public skillsState$ = new Subject<boolean>();
  public jobsState$ = new Subject<boolean>();
  public loadingMetadata$ = new Subject<boolean>();
  private locale: keyof Lang = 'en_US';

  constructor(
    private dataService: DataService,
    private localeService: LocaleService
  ) {
    this.localeService.getCurrentLocale().subscribe((currentLocale: Locale) => this.locale = currentLocale.locale);
  }

  objectKeys(obj: any): string[] {
    try { return Object.keys(obj) } catch (e) { return [] };
  }

  subscribeToComponentsMetadata(metadata: keyof ComponentsData): Observable<ComponentsMetadata> {
    this.loadingMetadata$.next(true);
    return this.dataService.getRoutesMetadata()
      .pipe(
        map((componentsMetadata: any) => { console.log('once'); this.loadingMetadata$.next(false); return componentsMetadata.components[metadata][this.locale] })
      );
  }

  subscribeToHeaderAndFooterMetadata(metadata: 'header' | 'footer'): Observable<HeaderTemplate | FooterTemplate> {
    this.loadingMetadata$.next(true);
    return this.dataService.getRoutesMetadata()
      .pipe(
        map((componentsMetadata: any) => { this.loadingMetadata$.next(false); return componentsMetadata[metadata][this.locale] })
      );
  }

  setSkillsLoadingState() {
    this.skillsState$.next(true);
  }

  setJobsLoadingState() {
    this.jobsState$.next(true);
  }
}