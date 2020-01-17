import { Component, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {

  constructor(public viewContainerRef: ViewContainerRef) { }

  ngOnInit() {
  }

}
