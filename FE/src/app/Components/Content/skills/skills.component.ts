import { Component, OnInit, Inject, ViewChild, TemplateRef, ElementRef, Output, EventEmitter } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';
import { ComponentsMetadata, Lang, ComponentsData } from 'src/app/Interfaces/ComponentsMetadata';
import { PageLogic } from 'src/app/Services/page.logic.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  host: {
    class: 'modalComponent'
  }
})
export class SkillsComponent implements OnInit {

  private metadata!: ComponentsMetadata;
  private slidesCount: number = 0;
  constructor(
    private pageLogic: PageLogic
  ) {
    this.pageLogic.subscribeToComponentsMetadata('skills').subscribe((componentMetadata: ComponentsMetadata) => {
      this.metadata = componentMetadata;
      console.log(this.metadata)
      this.slidesCount = this.objectKeys(this.metadata).length;
      this.pageLogic.setSkillsLoadingState();
    });
  }


  ngOnInit() { }

  displayImage(image: HTMLImageElement) {
    image.classList.add('fadeIn');
  }

  objectKeys(object: ComponentsMetadata): string[] {
    try { return Object.keys(object); } catch (e) { return []; };
  }
}