import { Component, OnInit, Inject, ViewChild, TemplateRef, ElementRef } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';
import { ComponentsMetadata, Lang } from 'src/app/Interfaces/ComponentsMetadata';
import { PageLogic } from 'src/app/Services/page.logic.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  host: {
    style: 'display: grid'
  }
})
export class SkillsComponent extends PageLogic implements OnInit {

  private locale!: keyof Lang;
  private metadata: Lang = { ro_RO: undefined, en_US: undefined }
  private translateValue: string = '0px';
  private slidesCount:number = 0;

  constructor(
    private dataService: DataService,
    private rootElement:ElementRef
  ) {
    super();
    this.dataService.getRoutesMetadata().subscribe((componentsMetadata: ComponentsMetadata) => {
      this.locale = componentsMetadata.currentLocale as 'ro_RO' | 'en_US';
      this.metadata[this.locale] = componentsMetadata.components.skills[this.locale];
      console.log(this.metadata[this.locale])
      this.slidesCount = this.objectKeys(this.metadata[this.locale]).length;
      console.log(this.slidesCount)
    });
  }

  ngOnInit() { }
  displayCurrentSkill(skillIndex: number) {
    this.translateValue = `${-((this.rootElement.nativeElement.getBoundingClientRect().width * 0.89) * skillIndex)}px`;
    console.log(skillIndex,this.translateValue)
  }

  displayImage(image: HTMLImageElement) {
    image.classList.add('fadeIn');
    image.previousElementSibling!.remove();
  }
}