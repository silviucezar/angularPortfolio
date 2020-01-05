import { Component, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  constructor( public viewContainerRef: ViewContainerRef) { }

  ngOnInit() {
  }

}
