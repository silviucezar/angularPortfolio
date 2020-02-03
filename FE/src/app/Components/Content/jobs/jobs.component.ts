import { Component, OnInit} from '@angular/core';
import { DataService } from 'src/app/Services/data.service';
import { ComponentsMetadata, Lang } from 'src/app/Interfaces/ComponentsMetadata';
import { PageLogic } from 'src/app/Services/page.logic.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss'],
  host: {
    class: 'modalComponent'
  }
})
export class JobsComponent extends PageLogic implements OnInit {

  private locale!: keyof Lang;
  private metadata: Lang = { ro_RO: undefined, en_US: undefined }
  private slidesCount: number = 0;

  constructor(
    private dataService: DataService
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

  displayImage(image: HTMLImageElement) {
    image.classList.add('fadeIn');
  }
}