import { Component, OnInit, AfterViewInit } from '@angular/core';
// import { DataService } from 'src/app/Services/data.service';
// import { Lang, ComponentsMetadata } from 'src/app/Interfaces/interfaces';
import { PageLogic } from 'src/app/Services/page.logic.service';
import { ComponentsTemplate, AboutMe, LangTemplate, LocaleTranslations, Lang } from 'src/app/Interfaces/interfaces';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']

})
export class AboutMeComponent implements OnInit, AfterViewInit {
  title = 'FE';

  private metadata: Lang<AboutMe> = { ro_RO: undefined, en_US: undefined };
  private locale: keyof LangTemplate = 'en_US';

  constructor(
    private pageLogic: PageLogic
  ) {
    this.pageLogic.currentLocaleTranslations$.subscribe((localeTranslations: LocaleTranslations | undefined) => {
      if (this.metadata[localeTranslations!.locale] !== undefined) return this.locale = localeTranslations!.locale;
        this.pageLogic.fetchComponentsMetadata('about_me').then((metadata: AboutMe) => {
          this.locale = localeTranslations!.locale;
          this.metadata[this.locale] = metadata;
        });
    });
  }

  ngOnInit() { }

  ngAfterViewInit() { }
}
