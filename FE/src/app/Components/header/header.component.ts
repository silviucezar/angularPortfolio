import { Component, OnInit, AfterViewInit, OnChanges, Input, SimpleChanges } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Lang, ComponentsMetadata } from 'src/app/Interfaces/ComponentsMetadata';
import { DataService } from 'src/app/Services/data.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [style({ display: 'block', opacity: '0' }), animate(300)]),
      transition(':leave', [style({ display: 'block', opacity: '1' }), animate(300)])
    ])
  ]
})
export class HeaderComponent implements OnInit, AfterViewInit, OnChanges {

  private currentLocale!: keyof Lang;
  private metadata: Lang = { ro_RO: undefined, en_US: undefined }
  private loadingHeader: Boolean = true;
  constructor(
    private dataService: DataService
  ) {
    this.dataService.getRoutesMetadata().subscribe((componentsMetadata: ComponentsMetadata) => {
      this.loadingHeader = false;
      this.currentLocale = componentsMetadata.currentLocale as 'ro_RO' | 'en_US';
      this.metadata[this.currentLocale] = componentsMetadata.header[this.currentLocale];
    });
  }

  ngOnInit() { }

  ngAfterViewInit() {
  }

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
