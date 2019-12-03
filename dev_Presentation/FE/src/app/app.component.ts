import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CanvasDetails } from 'src/Interfaces/CanvasDetails';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'FE';

  @ViewChild("GlobalScrollCanvas", { static: true }) GlobalScrollCanvas: ElementRef;
  @ViewChild("GlobalLeftMargin", { static: true }) GlobalLeftMargin: ElementRef;

  // private GlobalScrollCanvasElement: HTMLCanvasElement;
  // private GlobalLeftMarginElement: HTMLDivElement;
  // private GlobalScrollCanvasElementContext: CanvasRenderingContext2D;
  // private CanvasRenderDependencies: CanvasDetails;

  ngOnInit() {

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
