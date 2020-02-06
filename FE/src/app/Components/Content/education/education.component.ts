import { Component, OnInit } from '@angular/core';
// import { ComponentsMetadata } from 'src/app/Interfaces/interfaces';
import { PageLogic } from 'src/app/Services/page.logic.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  // private metadata!:ComponentsMetadata;
  constructor(
    private pageLogic: PageLogic
  ) {
    // this.pageLogic.subscribeToComponentsMetadata('education').subscribe((componentMetadata: ComponentsMetadata) => this.metadata = componentMetadata);

  }
  ngOnInit() { }
}
