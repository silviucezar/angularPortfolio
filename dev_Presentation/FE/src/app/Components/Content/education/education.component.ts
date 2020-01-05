import { Component, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  constructor( public viewContainerRef: ViewContainerRef) { }

  ngOnInit() {
  }

}
