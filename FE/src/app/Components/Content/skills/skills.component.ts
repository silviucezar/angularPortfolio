import { Component, OnInit, Inject, ViewChild, TemplateRef, ElementRef, Output, EventEmitter } from '@angular/core';
// import { DataService } from 'src/app/Services/data.service';
// import { ComponentsMetadata, Lang, ComponentsData } from 'src/app/Interfaces/interfaces';
import { PageLogic } from 'src/app/Services/page.logic.service';
import { LocaleTranslations, Skills, LangTemplate, Lang } from 'src/app/Interfaces/interfaces';

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
  private slidesCount: number = 0;
  constructor(
    private pageLogic: PageLogic
  ) {
    this.pageLogic.currentLocaleTranslations$.subscribe((localeTranslations: LocaleTranslations | undefined) => {
      if (this.metadata[localeTranslations!.locale] !== undefined) return this.locale = localeTranslations!.locale;
      this.pageLogic.fetchComponentsMetadata('skills').then((metadata: Skills) => {
        this.locale = localeTranslations!.locale;
        this.metadata[this.locale] = metadata;
        this.slidesCount = this.objectKeys(this.metadata).length;
      });
    });
  }


  ngOnInit() { }

  displayImage(image: HTMLImageElement) {
    image.classList.add('fadeIn');
  }

  objectKeys(object: Skills): string[] {
    try { return Object.keys(object); } catch (e) { return []; };
  }
}