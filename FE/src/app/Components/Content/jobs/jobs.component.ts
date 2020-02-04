import { Component, OnInit } from '@angular/core';
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
export class JobsComponent implements OnInit {

  private metadata!: ComponentsMetadata;
  private slidesCount: number = 0;
  constructor(
    private pageLogic: PageLogic
  ) {
    this.pageLogic.subscribeToComponentsMetadata('jobs').subscribe((componentMetadata: ComponentsMetadata) => {
      this.metadata = componentMetadata;
      this.slidesCount = this.objectKeys(this.metadata).length;
      this.pageLogic.setJobsLoadingState();
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