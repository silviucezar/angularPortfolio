import { Component, OnInit, ViewChild, ElementRef, ViewContainerRef, AfterViewInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { DataService } from '../../Services/data.service';
import { LoadersService } from '../../Services/lazy.service';
import { Locale, CategoryDetails, LocaleCategory } from '../../Interfaces/Locale';
import { InitService } from '../../Services/init.service';
import { LocaleService } from '../../Services/locale.service';
import { UrlListenerService } from '../../Services/url-listener.service';
import { ComponentsMetadata, ComponentsData, Lang } from '../../Interfaces/ComponentsMetadata'
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
  title = 'ads';
  @ViewChild('about_me', { read: ViewContainerRef, static: true }) about_me!: ViewContainerRef;
  @ViewChild('skills', { read: ViewContainerRef, static: true }) skills!: ViewContainerRef;
  @ViewChild('jobs', { read: ViewContainerRef, static: true }) jobs!: ViewContainerRef;
  @ViewChild('education', { read: ViewContainerRef, static: true }) education!: ViewContainerRef;
  @ViewChild('references', { read: ViewContainerRef, static: true }) references!: ViewContainerRef;
  @ViewChild('leave_message', { read: ViewContainerRef, static: true }) leave_message!: ViewContainerRef;

  private categories: CategoryDetails[] = [];
  private header_metadata = {};
  private about_me_metadata: {} = {};
  private skills_metadata: {} = {};
  private jobs_metadata: {} = {};
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
    private urlListenerService: UrlListenerService
  ) {
    this.localeService.getCurrentLocale().subscribe((localeValue: Locale) => {
      if (this.categories.length === 0) {
        for (const localeValueProps in localeValue.categoriesTitle) {
          this.categories.push(localeValue.categoriesTitle[localeValueProps as keyof LocaleCategory] as CategoryDetails)
        }
        this.currentLocale = localeValue.locale;
      }
      console.log(this.categories)
    });
  }

  ngOnInit() {
    this.initService.init(this.domRootElementRef);

    this.lazyService.setComponentContainerRef({
      AboutMe: this.about_me,
      Skills: this.skills,
      jobs: this.jobs,
      Education: this.education,
      References: this.references,
      LeaveMessage: this.leave_message
    });

    this.dataService.getPageTemplate().subscribe((pageTemplateTranslations: ComponentsMetadata) => {
      const currentMetadata: any = {};
      for (const translationCategory in pageTemplateTranslations) {
        if (translationCategory.match(/header|footer/gi)) {
          (this[`${translationCategory}_metadata` as 'about_me_metadata']) = pageTemplateTranslations[translationCategory as keyof ComponentsMetadata];
        } else {
          for (const componentCategory in pageTemplateTranslations.components) {
            currentMetadata[componentCategory] = this[`${translationCategory}_metadata` as 'about_me_metadata'] = pageTemplateTranslations.components[componentCategory as keyof ComponentsData][this.currentLocale as keyof Lang];
          }
        }
      }
      this.urlListenerService.getUrlSubscription().pipe(take(2)).subscribe(url => { if (url.dataToFetch !== null) this.lazyService.componentLoad(url, currentMetadata); });
    });
  }

  ngAfterViewInit() { }

}
