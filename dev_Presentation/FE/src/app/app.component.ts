import { Component, OnInit, ViewChild, ElementRef, ViewContainerRef, AfterViewInit } from '@angular/core';
import { filter, take } from 'rxjs/operators';
import { DataService } from './Services/data.service';
import { LoadersService } from './Services/loaders.service';
import { Locale, CategoryDetails,LocaleCategory } from './Interfaces/Locale';
import { InitService } from './Services/init.service';
import { LocaleService } from './Services/locale.service';
import { UrlListenerService } from './Services/url-listener.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  host: {
    "id": "appGlobalGrid",
    'class': 'extended'
  }
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'FE';
  @ViewChild('about_me', { read: ViewContainerRef, static: true }) about_me!: ViewContainerRef;
  @ViewChild('skills', { read: ViewContainerRef, static: true }) skills!: ViewContainerRef;
  @ViewChild('work_experience', { read: ViewContainerRef, static: true }) work_experience!: ViewContainerRef;
  @ViewChild('education', { read: ViewContainerRef, static: true }) education!: ViewContainerRef;
  @ViewChild('references', { read: ViewContainerRef, static: true }) references!: ViewContainerRef;
  @ViewChild('leave_message', { read: ViewContainerRef, static: true }) leave_message!: ViewContainerRef;

  private categories: CategoryDetails[] = [];
  private header_metadata: {} = {};
  private about_me_metadata: {} = {};
  private skills_metadata: {} = {};
  private work_experience_metadata: {} = {};
  private education_metadata: {} = {};
  private references_metadata: {} = {};
  private leave_message_metadata: {} = {};
  private footer_metadata: {} = {};

  private currentLocale: string = 'en_US';
  constructor(
    private dataService: DataService,
    private lazyService: LoadersService,
    private localeService: LocaleService,
    private initService: InitService,
    private domRootElementRef: ElementRef,
    private urlListenerService:UrlListenerService
  ) {
    this.localeService.getCurrentLocale().subscribe((localeValue: Locale) => {
      if (this.categories.length === 0) {
        for (const localeValueProps in localeValue.categoriesTitle) {
          this.categories.push(localeValue.categoriesTitle[localeValueProps as keyof LocaleCategory] as CategoryDetails)
        }
        this.currentLocale = localeValue.locale;
      }
    });
  }

  ngOnInit() {
    this.initService.init(this.domRootElementRef);

    this.lazyService.setComponentContainerRef({
      AboutMe: this.about_me,
      Skills: this.skills,
      WorkExperience: this.work_experience,
      Education: this.education,
      References: this.references,
      LeaveMessage: this.leave_message
    });

    this.dataService.getPageTemplate().subscribe(pageTemplateTranslations => {
      const currentMetadata: any = {};
      for (const translationCategory in pageTemplateTranslations) {
        if (translationCategory.match(/header|footer/gi)) {
          (this[`${translationCategory}_metadata` as 'about_me_metadata'])= pageTemplateTranslations.translationCategory;
        } else {
          for (const componentCategory in pageTemplateTranslations.Components) {
            currentMetadata[componentCategory] = this[`${translationCategory}_metadata` as 'about_me_metadata'] = pageTemplateTranslations.Components[componentCategory][this.currentLocale];
          }
        }
      }
      this.urlListenerService.getUrlSubscription().pipe(take(2)).subscribe(url => { if (url.dataToFetch !== null) this.lazyService.componentLoad(url, currentMetadata); });
    });
  }

  ngAfterViewInit() { }

}
