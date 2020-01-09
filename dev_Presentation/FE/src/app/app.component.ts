import { Component, OnInit, ViewChild, ElementRef, ViewContainerRef, AfterViewInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { filter, take } from 'rxjs/operators';
import { DataService } from './Services/data.service';
import { LoadersService } from './Services/loaders.service';
import { LocaleService } from './Services/locale.service';
import { LocaleDetails } from './Interfaces/locale.interface';
import { WindowEventsService } from './Services/window-events.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  host: {
    "id": "App_Global_Grid"
  }
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'FE';
  @ViewChild('Nav_Bar_Canvas', { static: true }) Nav_Bar_Canvas: ElementRef;
  @ViewChild("Header_Canvas", { static: true }) Header_Canvas: ElementRef;
  @ViewChild("AboutMe", { read: ViewContainerRef, static: true }) AboutMe: ViewContainerRef;
  @ViewChild("Skills", { read: ViewContainerRef, static: true }) Skills: ViewContainerRef;
  @ViewChild("WorkExperience", { read: ViewContainerRef, static: true }) WorkExperience: ViewContainerRef;
  @ViewChild("Education", { read: ViewContainerRef, static: true }) Education: ViewContainerRef;
  @ViewChild("References", { read: ViewContainerRef, static: true }) References: ViewContainerRef;
  @ViewChild("LeaveMessage", { read: ViewContainerRef, static: true }) LeaveMessage: ViewContainerRef;
  private url = new BehaviorSubject<string>(null);
  private currentLocale = null;
  private categoriesTitle: string[] = [];
  private HeaderMetadata: {} = null;
  private AboutMeMetadata: {} = null;
  private SkillsMetadata: {} = null;
  private WorkExperienceMetadata: {} = null;
  private EducationMetadata: {} = null;
  private ReferencesMetadata: {} = null;
  private LeaveMessageMetadata: {} = null;
  private FooterMetadata: {} = null;
  constructor(
    private router: Router,
    private dataService: DataService,
    private lazy: LoadersService,
    private locale: LocaleService,
    private windowEventsService: WindowEventsService
  ) {
    this.locale.getCurrentLocale().subscribe(localeValue => {
      const LOCALE_VALUE: LocaleDetails = localeValue;
      this.currentLocale = localeValue['locale'];
      if (this.categoriesTitle.length === 0) {
        for (const LOCALE_VALUE_PROPS in LOCALE_VALUE.categoriesTitle) {
          this.categoriesTitle.push(LOCALE_VALUE.categoriesTitle[LOCALE_VALUE_PROPS])
        }
      }
    });

    this.router.events.pipe(filter(event => event instanceof NavigationStart)).subscribe(event => {
      if (event['url'] !== "/") {
        if (event['url'].match('-')) {
          let EVENT_URL_ARR = event["url"].replace("/portfolio/", "").split("-");
          EVENT_URL_ARR[0] = EVENT_URL_ARR[0].replace(EVENT_URL_ARR[0][0], EVENT_URL_ARR[0][0].toUpperCase());
          EVENT_URL_ARR[1] = EVENT_URL_ARR[1].replace(EVENT_URL_ARR[1][0], EVENT_URL_ARR[1][0].toUpperCase());
          this.url.next(EVENT_URL_ARR.join().replace(",", ""));
        } else {
          let EVENT_URL = event["url"].replace("/portfolio/", "");
          this.url.next(EVENT_URL.replace(EVENT_URL[0], EVENT_URL[0].toUpperCase()));
        }
      } else {
        this.url.next('AboutMe');
      }
      this.dataService.setCurrentRouteData(this.url.value);
    });
  }

  ngOnInit() {
    this.lazy.setComponentContainerRef({
      AboutMe: this.AboutMe,
      Skills: this.Skills,
      WorkExperience: this.WorkExperience,
      Education: this.Education,
      References: this.References,
      LeaveMessage: this.LeaveMessage
    });

    this.dataService.getPageTemplate().subscribe(pageTemplateTranslations => {
      const CURRENT_METADATA: {} = {};
      for (const TRANSLATION_CATEGORY in pageTemplateTranslations) {
        if (TRANSLATION_CATEGORY.match(/Header|Footer/)) {
          this[`${TRANSLATION_CATEGORY}Metadata`] = pageTemplateTranslations.translationCategory
        } else {
          for (const COMPONENT_CATEGORY in pageTemplateTranslations.Components) {
            CURRENT_METADATA[COMPONENT_CATEGORY] = this[`${COMPONENT_CATEGORY}Metadata`] = pageTemplateTranslations.Components[COMPONENT_CATEGORY][this.currentLocale];
          }
        }
      }
      this.url.pipe(take(2)).subscribe(url => { if (url) this.lazy.componentLoad(url, CURRENT_METADATA); });
    });
  }

  ngAfterViewInit() {
    this.windowEventsService.init({
      urlSubscription: this.url,
      NavBarCanvas: {
        name: 'NavBar',
        canvas: this.Nav_Bar_Canvas
      },
      HeaderCanvas: {
        name: 'Header',
        canvas: this.Header_Canvas
      }
    });
  }
}
