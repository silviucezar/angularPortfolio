import { Component, OnInit, AfterViewInit } from '@angular/core';
import { trigger, style, transition, animate } from '@angular/animations';
import { Lang } from 'src/app/Interfaces/ComponentsMetadata';
import { DataService } from 'src/app/Services/data.service';
import { PageLogic } from 'src/app/Services/page.logic.service';
import { HeaderTemplate } from 'src/app/Interfaces/FrontEndData';
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
export class HeaderComponent implements OnInit, AfterViewInit {

  private metadata: HeaderTemplate = {};
  constructor(
    private pageLogic: PageLogic
  ) {
    this.pageLogic.subscribeToHeaderAndFooterMetadata('header').subscribe((componentMetadata: any) => {
      this.metadata = componentMetadata;
    });
  }

  ngOnInit() { }

  ngAfterViewInit() { }
}
