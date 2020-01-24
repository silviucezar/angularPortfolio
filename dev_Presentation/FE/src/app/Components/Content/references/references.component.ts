import { Component, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.scss']
})
export class ReferencesComponent implements OnInit {

  constructor( public viewContainerRef: ViewContainerRef) { }

  ngOnInit() {
  }

}
