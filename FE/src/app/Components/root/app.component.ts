import { Component, OnInit, ViewChild, ElementRef, ViewContainerRef, AfterViewInit } from '@angular/core';
import { CategoryDetails, HeaderTemplate, Lang, FooterTemplate, HeaderFooterMetadata, LangTemplate, Locale, LocaleTranslations } from '../../Interfaces/interfaces';
import { InitService } from '../../Services/init.service';
import { UrlSubscription } from 'src/app/Interfaces/interfaces';
import { PageLogic } from 'src/app/Services/page.logic.service';
import { take } from 'rxjs/operators';

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

  private translations!: LocaleTranslations | undefined;
  private locale: keyof LangTemplate = 'en_US';
  private headerMetadata: Lang<HeaderTemplate> = { ro_RO: undefined, en_US: undefined, locale: undefined };
  private footerMetadata: Lang<FooterTemplate> = { ro_RO: undefined, en_US: undefined, locale: undefined };
  constructor(
    private initService: InitService,
    private domRootElementRef: ElementRef,
    private pageLogic: PageLogic
  ) {
    this.pageLogic.currentLocaleTranslations$.subscribe((localeTranslations: LocaleTranslations | undefined) => {
      this.translations = localeTranslations;
      this.locale = localeTranslations!.locale;
      if (this.headerMetadata[this.translations!.locale] !== undefined) return;
      this.pageLogic.fetchHeaderFooterMetadata().then((data: HeaderFooterMetadata) => {
        this.headerMetadata[this.locale] = data.headerMetadata;
        this.footerMetadata[this.locale] = data.footerMetadata;
      });
    });
  }

  ngOnInit() {
    // this.pageLogic.skillsState$.pipe(take(1)).subscribe((state: boolean) => this.skillsState = state);
    // this.pageLogic.jobsState$.pipe(take(1)).subscribe((state: boolean) => this.jobsState = state);
    // console.log('app', this.jobsState, this.skillsState)
  }

  ngAfterViewInit() {
    this.initService.init(this.domRootElementRef, {
      about_me: this.about_me,
      skills: this.skills,
      jobs: this.jobs,
      education: this.education,
      references: this.references,
      leave_message: this.leave_message
    });
  }

  objectKeys(obj: any): string[] {
    return Object.keys(obj);
  }

  getCurrentUrl() {

  }
}
