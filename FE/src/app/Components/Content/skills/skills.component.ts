import { Component, OnInit, Inject } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';
import { ComponentsMetadata, Lang } from 'src/app/Interfaces/ComponentsMetadata';
import { PageLogic } from 'src/app/Services/page.logic.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent extends PageLogic implements OnInit {

  private locale!: keyof Lang;
  private metadata: Lang = { ro_RO: undefined, en_US: undefined }
  private finishedLoading: Boolean = false;
  private skills: string[] = [];
  private isExpanded: boolean = false;
  private currentSkillNumber: number = 0;

  constructor(
    private dataService: DataService,
    @Inject(DOCUMENT) private _document: Document
  ) {
    super();
    this.dataService.getRoutesMetadata().subscribe((componentsMetadata: ComponentsMetadata) => {
      this.finishedLoading = true;
      this.locale = componentsMetadata.currentLocale as 'ro_RO' | 'en_US';
      this.metadata[this.locale] = componentsMetadata.components.skills[this.locale];
      if (this.skills = []) this.skills = this.objectKeys(this.metadata[this.locale]);
      console.log(this.metadata)
    });
  }

  ngOnInit() { }

  displayCurrentSkill(skillIndexReference: number, slide?: boolean) {
    if (!slide) {
      if (skillIndexReference === this.currentSkillNumber) this.isExpanded = !this.isExpanded; else {
        this.currentSkillNumber = skillIndexReference;
        this.slideToSkill();
      }
    } else {
      this.currentSkillNumber = this.currentSkillNumber + skillIndexReference;
      this.slideToSkill();
    }

  }

  displayImage(image: HTMLImageElement) {
    image.classList.add('fadeIn');
    image.previousElementSibling!.remove();
    // this.r.setAttribute(container.firstElementChild, 'style', `line-height:${container.getBoundingClientRect().height}px`);
  }

  slideToSkill() {
    console.log('t')
    this._document.querySelectorAll('.detailedSkill').forEach((skillDetail, index) => {

    });
  }
}
