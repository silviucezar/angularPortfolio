import { Component, OnInit } from '@angular/core';
import { PageLogic } from 'src/app/Services/page.logic.service';
import { LocaleTranslations, Skills, LangTemplate, Lang } from 'src/app/Interfaces/interfaces';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  host: {
    class: 'modalComponent'
  }
})
export class SkillsComponent implements OnInit {

  private metadata: Lang<Skills> = { ro_RO: undefined, en_US: undefined };
  private locale: keyof LangTemplate = 'en_US';
  constructor(
    private pageLogic: PageLogic
  ) {
    this.pageLogic.currentLocaleTranslations$.pipe(filter((localeTranslations) => localeTranslations!.currentUrl === 'skills'))
    .subscribe((localeTranslations: LocaleTranslations | undefined) => {
      if (this.metadata[localeTranslations!.locale] !== undefined) {
        this.locale = localeTranslations!.locale;
        this.pageLogic.hideModalSibling('jobs');
      } else {
        this.pageLogic.fetchComponentsMetadata('skills').then((metadata: Skills) => {
          this.locale = localeTranslations!.locale;
          this.metadata[this.locale] = metadata;
          console.log(this.metadata[this.locale])
          this.pageLogic.hideModalSibling('jobs');
        });
      }
    });
  }

  ngOnInit() { }

  displayImage(image: HTMLImageElement) {
    image.classList.add('fadeIn');
  }


}