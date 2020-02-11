import { Component, OnInit, ElementRef } from '@angular/core';
import { References, Lang, LangTemplate, LocaleTranslations } from 'src/app/Interfaces/interfaces';
import { PageLogic } from 'src/app/Services/page.logic.service';

@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.scss'],
  host: {
    style: 'position:relative',
    id : "references"
  }
})
export class ReferencesComponent implements OnInit {

  private metadata: Lang<References> = { ro_RO: undefined, en_US: undefined };
  private locale: keyof LangTemplate = 'en_US';
  constructor(
    private pageLogic: PageLogic
  ) {
    this.pageLogic.currentLocaleTranslations$.subscribe((localeTranslations: LocaleTranslations | undefined) => {
      if (this.metadata[localeTranslations!.locale] !== undefined) return this.locale = localeTranslations!.locale;
      this.pageLogic.fetchComponentsMetadata('references').then((metadata: References) => {
        this.locale = localeTranslations!.locale;
        this.metadata[this.locale] = metadata;
      });
    });
  }
  ngOnInit() { }

}
