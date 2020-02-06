import { Component, OnInit } from '@angular/core';
import { PageLogic } from 'src/app/Services/page.logic.service';
import { Education, Lang, LangTemplate, LocaleTranslations } from 'src/app/Interfaces/interfaces';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  private metadata: Lang<Education> = { ro_RO: undefined, en_US: undefined };
  private locale: keyof LangTemplate = 'en_US';
  constructor(
    private pageLogic: PageLogic
  ) {
    this.pageLogic.currentLocaleTranslations$.subscribe((localeTranslations: LocaleTranslations | undefined) => {
      if (this.metadata[localeTranslations!.locale] !== undefined) return this.locale = localeTranslations!.locale;
      this.pageLogic.fetchComponentsMetadata('education').then((metadata: Education) => {
        this.locale = localeTranslations!.locale;
        this.metadata[this.locale] = metadata;
      });
    });
  }
  ngOnInit() { }
}
