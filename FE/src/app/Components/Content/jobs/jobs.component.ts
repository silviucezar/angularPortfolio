import { Component, OnInit } from '@angular/core';
// import { DataService } from 'src/app/Services/data.service';
// import { ComponentsMetadata, Lang } from 'src/app/Interfaces/interfaces';
import { PageLogic } from 'src/app/Services/page.logic.service';
import { Lang, Jobs, LangTemplate, LocaleTranslations } from 'src/app/Interfaces/interfaces';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss'],
  host: {
    class: 'modalComponent'
  }
})
export class JobsComponent implements OnInit {

  private metadata: Lang<Jobs> = { ro_RO: undefined, en_US: undefined };
  private locale: keyof LangTemplate = 'en_US';
  private slidesCount: number = 0;
  constructor(
    private pageLogic: PageLogic
  ) {
    this.pageLogic.currentLocaleTranslations$.pipe(filter((localeTranslations) => localeTranslations!.currentUrl === 'jobs'))
    .subscribe((localeTranslations: LocaleTranslations | undefined) => {
      if (this.metadata[localeTranslations!.locale] !== undefined) {
        this.locale = localeTranslations!.locale;
        this.pageLogic.hideModalSibling('skills');
      } else {
        this.pageLogic.fetchComponentsMetadata('jobs').then((metadata: Jobs) => {
          this.locale = localeTranslations!.locale;
          this.metadata[this.locale] = metadata;
          this.slidesCount = this.pageLogic.objectKeys(this.metadata[this.locale] as JSON).length;
          this.pageLogic.hideModalSibling('skills');
        });
      } 
    });
  }


  ngOnInit() { }

  displayImage(image: HTMLImageElement) {
    image.classList.add('fadeIn');
  }
}