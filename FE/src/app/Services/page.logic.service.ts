import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { ComponentsMetadata, Lang, ComponentsData } from '../Interfaces/ComponentsMetadata';
import { Subject, Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { FooterTemplate, HeaderTemplate } from '../Interfaces/FrontEndData';

@Injectable({
  providedIn: 'root'
})
export class PageLogic {

  public skillsState$ = new Subject<boolean>();
  public jobsState$ = new Subject<boolean>();
  public loadingMetadata$ = new Subject<boolean>();

  constructor(
    private dataService: DataService
  ) { }

  objectKeys(obj: any): string[] {
    try { return Object.keys(obj) } catch (e) { return [] };
  }

  subscribeToComponentsMetadata(metadata: keyof ComponentsData): Observable<ComponentsMetadata> {
    this.loadingMetadata$.next(true);
    return this.dataService.getRoutesMetadata()
      .pipe(
        map((componentsMetadata: any) => { this.loadingMetadata$.next(false); return componentsMetadata.components[metadata][componentsMetadata.currentLocale] })
      );
  }

  subscribeToHeaderAndFooterMetadata(metadata: 'header' | 'footer'): Observable<HeaderTemplate | FooterTemplate> {
    this.loadingMetadata$.next(true);
    return this.dataService.getRoutesMetadata()
      .pipe(
        map((componentsMetadata: any) => { this.loadingMetadata$.next(false); return componentsMetadata[metadata][componentsMetadata.currentLocale] })
      );
  }

  toggleLanguage(locale: keyof Lang) {
    this.dataService.setCurrentRouteDataUsingLang(locale);
  }

  setSkillsLoadingState() {
    this.skillsState$.next(true);
  }

  setJobsLoadingState() {
    this.jobsState$.next(true);
  }
}