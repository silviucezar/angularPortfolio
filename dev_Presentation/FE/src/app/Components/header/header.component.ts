import { Component, OnInit, AfterViewInit, ViewContainerRef } from '@angular/core';
import { DataService } from '../../Services/data.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('fadeIn', [
      state('true', style({ opacity: 0 })),
      state('false', style({ opacity: 1 })),
      transition('true <=> false', animate('1s'))
    ])
  ]
})
export class HeaderComponent implements OnInit, AfterViewInit {

  constructor(public viewContainerRef: ViewContainerRef) { }

  ngOnInit() { }

  ngAfterViewInit() {
    // this.dataService.setComponentContainerRef('Header', this.viewContainerRef, this);
  }


  ObjectKeys(obj: object): any {
    return Object.keys(obj);
  }
}
