import { Component, OnInit, ViewChild, ElementRef, ViewContainerRef } from '@angular/core';
import { CanvasDetails } from 'src/app/Interfaces/CanvasDetails';
import { RenderDetails } from './Classes/renderDetails';
import { Router, NavigationStart } from '@angular/router';
import { filter } from 'rxjs/operators';
import { DataService } from './Services/data.service';
import { LoadersService } from './Services/loaders.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  host: {
    "id": "App_Global_Grid"
  }
})
export class AppComponent implements OnInit {
  title = 'FE';
  @ViewChild("GlobalScrollCanvas", { static: true }) GlobalScrollCanvas: ElementRef;
  @ViewChild("GlobalLeftMargin", { static: true }) GlobalLeftMargin: ElementRef;

  private RenderDetails = new RenderDetails();
  private pageTemplate: any = null;
  private url: string = null;
  // private GlobalScrollCanvasElement: HTMLCanvasElement;
  // private GlobalLeftMarginElement: HTMLDivElement;
  // private GlobalScrollCanvasElementContext: CanvasRenderingContext2D;
  // private CanvasRenderDependencies: CanvasDetails;
  constructor(private router: Router, private dataService: DataService, private load: LoadersService) {
    this.router.events.pipe(filter(event => event instanceof NavigationStart)).subscribe(event => {
      if (event["url"] !== "/") {
        if (event['url'].match('-')) {
          let EVENT_URL_ARR = event["url"].replace("/portfolio/", "").split("-");
          EVENT_URL_ARR[0] = EVENT_URL_ARR[0].replace(EVENT_URL_ARR[0][0], EVENT_URL_ARR[0][0].toUpperCase());
          EVENT_URL_ARR[1] = EVENT_URL_ARR[1].replace(EVENT_URL_ARR[1][0], EVENT_URL_ARR[1][0].toUpperCase());
          this.url = EVENT_URL_ARR.join().replace(",", "");
          this.dataService.setCurrentRouteData(this.url);
        } else {
          let EVENT_URL = event["url"].replace("/portfolio/", "");
          this.url = EVENT_URL.replace(EVENT_URL[0], EVENT_URL[0].toUpperCase());
          this.dataService.setCurrentRouteData(this.url);
        }
      } else {
        this.url = 'AboutMe';
        this.dataService.setCurrentRouteData(this.url);
      }
    });
    this.dataService.getPageTemplate().subscribe(pageTemplate => {
      this.load.lazyComponentLoad(pageTemplate.Components[this.url],this.url);
    });
  }

  ngOnInit() { }

  ngAfterViewInit() {
    // this.GlobalScrollCanvasElement = this.GlobalScrollCanvas.nativeElement;
    // this.GlobalScrollCanvasElementContext = this.GlobalScrollCanvasElement.getContext("2d");
    // this.GlobalLeftMarginElement = this.GlobalLeftMargin.nativeElement;
    // this.drawCanvas();
  }
  // drawCanvas() {
  //   this.CanvasRenderDependencies = {
  //     CanvasTotalWidth: this.GlobalLeftMarginElement.getBoundingClientRect().width,
  //     CanvasTotalHeight: this.GlobalLeftMarginElement.getBoundingClientRect().height
  //   };
  //   this.GlobalScrollCanvasElement.width = this.CanvasRenderDependencies.CanvasTotalWidth;
  //   this.GlobalScrollCanvasElement.height = this.CanvasRenderDependencies.CanvasTotalHeight;
  //   this.GlobalScrollCanvasElementContext.beginPath();
  //   this.GlobalScrollCanvasElementContext.rect(this.CanvasRenderDependencies.CanvasTotalWidth / 1.15 - 5, 0, this.CanvasRenderDependencies.CanvasTotalWidth + 199, this.CanvasRenderDependencies.CanvasTotalHeight);
  //   this.GlobalScrollCanvasElementContext.fillStyle = "#add8e6";
  //   this.GlobalScrollCanvasElementContext.fill();
  //   this.GlobalScrollCanvasElementContext.closePath();
  // }

  // onRouteActivate(event) {
  //   if (event.activeRoute.snapshot.routeConfig.path === "profile-preview") {
  //     this.HeaderData = event.activeRoute.snapshot.data.initialData
  //     console.log(this.HeaderData);
  //   }
  // }
}
