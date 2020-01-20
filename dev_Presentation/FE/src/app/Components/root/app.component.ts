import { Component, OnInit, ViewChild, ElementRef, ViewContainerRef, AfterViewInit } from '@angular/core';
import { Locale, CategoryDetails, LocaleCategory } from '../../Interfaces/Locale';
import { InitService } from '../../Services/init.service';
import { LocaleService } from '../../Services/locale.service';
import { UrlListenerService } from 'src/app/Services/url-listener.service';

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
  private currentLocale: string = 'en_US';
  constructor(
    private localeService: LocaleService,
    private initService: InitService,
    private domRootElementRef: ElementRef,
    private urlListenerService: UrlListenerService,

  ) {
    this.localeService.getCurrentLocale().subscribe((localeValue: Locale) => {
      this.categories = [];
      for (const localeValueProps in localeValue.categoriesTitle) {
        this.categories.push(localeValue.categoriesTitle[localeValueProps as keyof LocaleCategory] as CategoryDetails)
      }
      this.currentLocale = localeValue.locale;
    });
  }

  ngOnInit() {
    this.urlListenerService.listen();
    this.initService.init(this.domRootElementRef, {
      about_me: this.about_me,
      skills: this.skills,
      jobs: this.jobs,
      education: this.education,
      references: this.references,
      leave_message: this.leave_message
    }, true);
  }

  ngAfterViewInit() { }

}
