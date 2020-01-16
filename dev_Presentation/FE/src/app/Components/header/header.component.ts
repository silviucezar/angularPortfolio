import { Component, OnInit, AfterViewInit, OnChanges, Input, SimpleChanges, ViewChild, ElementRef } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Locale } from 'src/app/Interfaces/Locale';

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
export class HeaderComponent implements OnInit, AfterViewInit, OnChanges {

  @Input() headerMetadata: {} = {};
  @Input() currentLocale!: Locale;

  private loadingHeader: boolean = true;
  constructor() {
  }

  ngOnInit() { }

  ngAfterViewInit() { }

  ngOnChanges(changes: SimpleChanges) {
    if (
      changes.hasOwnProperty('headerMetadata') &&
      changes.headerMetadata.previousValue !== undefined &&
      changes.headerMetadata.isFirstChange
    ) this.loadingHeader = false;
  }

  ObjectKeys(obj: object): any {
    return Object.keys(obj);
  }
}
