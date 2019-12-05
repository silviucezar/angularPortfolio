import { Component, OnInit, Input, AfterViewInit, ElementRef, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  @Input() DataSnapshot;
  @Input() Locale;


  constructor(public ViewContainerRef: ViewContainerRef) {
  }

  public _ViewContainerRef = this.ViewContainerRef;


  ngOnInit() { }

  ngAfterViewInit() { }


  ObjectKeys(obj: object): any {
    return Object.keys(obj);
  }
}
