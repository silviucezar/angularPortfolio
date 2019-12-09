import { Component, OnInit, ViewChild, ElementRef, ViewContainerRef } from '@angular/core';
import { CanvasDetails } from 'src/app/Interfaces/CanvasDetails';
import { RenderDetails } from './Classes/renderDetails';


/**
 * @title Determinate progress-bar
 */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  host: {
    "id": "App_Global_Grid",
    "[class]": "DeviceOrientation"
  }
})
export class AppComponent implements OnInit {
  title = 'FE';
  private resizeTimeout:any = null;
  @ViewChild("GlobalScrollCanvas", { static: true }) GlobalScrollCanvas: ElementRef;
  @ViewChild("GlobalLeftMargin", { static: true }) GlobalLeftMargin: ElementRef;

  private RenderDetails = new RenderDetails();
  private DeviceOrientation: string = this.RenderDetails.WindowDetails.getDeviceOrientation();
  // private GlobalScrollCanvasElement: HTMLCanvasElement;
  // private GlobalLeftMarginElement: HTMLDivElement;
  // private GlobalScrollCanvasElementContext: CanvasRenderingContext2D;
  // private CanvasRenderDependencies: CanvasDetails;
  constructor() { }
  ngOnInit() {

    window.onresize = e => {
      clearTimeout(this.resizeTimeout);
      this.resizeTimeout = setTimeout(() => {
        this.DeviceOrientation = this.RenderDetails.WindowDetails.getDeviceOrientation();
        // this.drawCanvas();
      }, 100);
    }
  }




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
