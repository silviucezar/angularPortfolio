import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { PageLogic } from 'src/app/Services/page.logic.service';
import { AboutMe, LangTemplate, LocaleTranslations, Lang } from 'src/app/Interfaces/interfaces';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
  host: {
    style: 'position:relative'
  }

})
export class AboutMeComponent implements OnInit, AfterViewInit {
  title = 'FE';

  private metadata: Lang<AboutMe> = { ro_RO: undefined, en_US: undefined };
  private locale: keyof LangTemplate = 'en_US';

  constructor(
    private pageLogic: PageLogic
  ) {
    this.pageLogic.currentLocaleTranslations$.subscribe((localeTranslations: LocaleTranslations | undefined) => {
      if (this.metadata[localeTranslations!.locale] !== undefined) {
        this.locale = localeTranslations!.locale;
        this.pageLogic.closeSkillsJobsModal();
      } else {
        this.pageLogic.fetchComponentsMetadata('about_me').then((metadata: AboutMe) => {
          this.locale = localeTranslations!.locale;
          this.metadata[this.locale] = metadata;
          this.pageLogic.closeSkillsJobsModal();
        });
      }
    });
  }

  ngOnInit() { }

  ngAfterViewInit() { }
}
