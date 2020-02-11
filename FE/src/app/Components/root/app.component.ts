import { Component, OnInit, ViewChild, ElementRef, ViewContainerRef, AfterViewInit } from '@angular/core';
import { HeaderTemplate, Lang, FooterTemplate, LangTemplate, LocaleTranslations, InitialMetadata } from '../../Interfaces/interfaces';
import { InitService } from '../../Services/init.service';
import { PageLogic } from 'src/app/Services/page.logic.service';

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

  private currentUrl!: string | undefined;
  private locale: keyof LangTemplate = 'en_US';
  private skillsState: boolean = false;
  private jobsState: boolean = false;
  private headerMetadata: Lang<HeaderTemplate> = { ro_RO: undefined, en_US: undefined };
  private menuMetadata: Lang<string[]> = { ro_RO: undefined, en_US: undefined };
  private footerMetadata: Lang<FooterTemplate> = { ro_RO: undefined, en_US: undefined };
  constructor(
    private initService: InitService,
    private domRootElementRef: ElementRef,
    private pageLogic: PageLogic
  ) {
    this.pageLogic.currentLocaleTranslations$.subscribe((localeTranslations: LocaleTranslations | undefined) => {
      console.log(this.currentUrl)
      this.currentUrl = localeTranslations!.currentUrl;
      if (this.headerMetadata[localeTranslations!.locale] !== undefined) return this.locale = localeTranslations!.locale;
      this.pageLogic.fetchInitialMetadata().then((data: InitialMetadata) => {
        this.locale = localeTranslations!.locale;
        this.headerMetadata[this.locale] = data.headerMetadata;
        this.menuMetadata[this.locale] = data.menuMetadata;
        this.footerMetadata[this.locale] = data.footerMetadata;
        console.log(this.footerMetadata)
      });
    });
  }

  ngOnInit() {
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
    this.pageLogic.skillsState$.subscribe((state: boolean) => this.skillsState = state);
    this.pageLogic.jobsState$.subscribe((state: boolean) => this.jobsState = state);
  }
}
