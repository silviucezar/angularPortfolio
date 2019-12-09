import { Component, OnInit, Input, AfterViewInit, ElementRef, ViewContainerRef, ChangeDetectionStrategy } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { DataService } from '../../Services/data.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('fadeIn', [
      state('true', style({ opacity: 0})),
      state('false', style({ opacity: 1 })),
      transition('true <=> false', animate('1s'))
    ])
  ]
})
export class HeaderComponent implements OnInit, AfterViewInit {

  // @Input() DataSnapshot;
  // @Input() Locale;
  private url: string;
  private loadingHeader: boolean = true;
  private pageTemplate: any;
  private locale = "ro_RO"

  constructor(
    private viewContainerRef: ViewContainerRef,
    private router: Router,
    private dataService: DataService,
  ) {
    this.router.events.pipe(filter(event=> event instanceof NavigationStart)).subscribe(event => {
      if (event["url"] !== "/") {
        let EVENT_URL_ARR = event["url"].replace("/portfolio/", "").split("-");
        EVENT_URL_ARR[0] = EVENT_URL_ARR[0].replace(EVENT_URL_ARR[0][0], EVENT_URL_ARR[0][0].toUpperCase());
        EVENT_URL_ARR[1] = EVENT_URL_ARR[1].replace(EVENT_URL_ARR[1][0], EVENT_URL_ARR[1][0].toUpperCase());
        this.url = EVENT_URL_ARR.join().replace(",", "");
      } else {
        this.url = "AboutMe";
      }
      this.dataService.getRoutesData(this)
        .then(result => {
          this.loadingHeader = false;
          this.pageTemplate = result;
          console.log(this.pageTemplate);
        })
        .catch(e => {
          console.log(e);
        });
    });
  }

  ngOnInit() { }

  ngAfterViewInit() { }


  ObjectKeys(obj: object): any {
    return Object.keys(obj);
  }

  animationDone(event) {
    console.log(event)
  }
}
