import { Component, OnInit, Inject, ViewChild, TemplateRef, ElementRef } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';
import { ComponentsMetadata, Lang } from 'src/app/Interfaces/ComponentsMetadata';
import { PageLogic } from 'src/app/Services/page.logic.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss'],
  host: {
    style: 'display: grid'
  }
})
export class JobsComponent extends PageLogic implements OnInit {

  private locale!: keyof Lang;
  private metadata: Lang = { ro_RO: undefined, en_US: undefined }
  private translateValue: string = '0px';
  private slidesCount: number = 0;

  constructor(
    private dataService: DataService,
    private rootElement: ElementRef
  ) {
    super();
    this.dataService.getRoutesMetadata().subscribe((componentsMetadata: ComponentsMetadata) => {
      this.locale = componentsMetadata.currentLocale as 'ro_RO' | 'en_US';
      this.metadata[this.locale] = componentsMetadata.components.jobs[this.locale];
      this.slidesCount = this.objectKeys(this.metadata[this.locale]).length;
      console.log(this.metadata)
    });
  }

  ngOnInit() { }
  displayCurrentJob(jobIndex: number) {
    this.translateValue = `${-((this.rootElement.nativeElement.getBoundingClientRect().width * 0.89) * jobIndex)}px`;
  }

  displayImage(image: HTMLImageElement) {
    image.classList.add('fadeIn');
    image.previousElementSibling!.remove();
  }
}