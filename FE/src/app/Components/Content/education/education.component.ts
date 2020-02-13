import { Component, OnInit, ElementRef } from '@angular/core';
import { PageLogic } from 'src/app/Services/page.logic.service';
import { Education, Lang, LangTemplate, LocaleTranslations } from 'src/app/Interfaces/interfaces';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
  host : {
    class : 'education',
    id : "education"
  }
})
export class EducationComponent implements OnInit {

  private metadata: Lang<Education> = { ro_RO: undefined, en_US: undefined };
  private locale: keyof LangTemplate = 'en_US';
  constructor(
    private pageLogic: PageLogic
  ) {
    this.pageLogic.currentLocaleTranslations$.pipe(filter((localeTranslations) => !localeTranslations!.currentUrl.match(/skills|jobs/)))
    .subscribe((localeTranslations: LocaleTranslations | undefined) => {
      if (this.metadata[localeTranslations!.locale] !== undefined) {
        this.locale = localeTranslations!.locale;
        this.pageLogic.modalState$.next(false);
      } else {
        this.pageLogic.fetchComponentsMetadata('education').then((metadata: Education) => {
          this.locale = localeTranslations!.locale;
          this.metadata[this.locale] = metadata;
          this.pageLogic.modalState$.next(false);
        });
      }
    });
  }
  ngOnInit() { }
}
