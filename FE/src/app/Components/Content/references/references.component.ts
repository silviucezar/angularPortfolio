import { Component, OnInit } from '@angular/core';
import { References, Lang, LangTemplate, LocaleTranslations } from 'src/app/Interfaces/interfaces';
import { PageLogic } from 'src/app/Services/page.logic.service';

@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.scss']
})
export class ReferencesComponent implements OnInit {

  private metadata: Lang<References> = { ro_RO: undefined, en_US: undefined };
  private locale: keyof LangTemplate = 'en_US';
  constructor(
    private pageLogic: PageLogic
  ) {
    this.pageLogic.currentLocaleTranslations$.subscribe((localeTranslations: LocaleTranslations | undefined) => {
      if (this.metadata[localeTranslations!.locale] !== undefined) return this.locale = localeTranslations!.locale;
      this.pageLogic.fetchComponentsMetadata('education').then((metadata: References) => {
        this.locale = localeTranslations!.locale;
        this.metadata[this.locale] = metadata;
      });
    });
  }
  ngOnInit() {
  }

}
