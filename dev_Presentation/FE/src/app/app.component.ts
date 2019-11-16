import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { HttpService } from 'src/Services/http.service';
import { RenderingService } from "src/Services/rendering.service";
import { RenderDetails } from "src/Classes/renderDetails";
import { CanvasDetails } from "src/Interfaces/CanvasDetails";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'FE';

  @ViewChild("GlobalScrollCanvas", { static: true }) GlobalScrollCanvas: ElementRef;
  @ViewChild("GlobalLeftMargin", {static:true}) GlobalLeftMargin : ElementRef;
  

  private GlobalScrollCanvasElement: HTMLCanvasElement;
  private GlobalLeftMarginElement : HTMLDivElement;
  private GlobalScrollCanvasElementContext : CanvasRenderingContext2D;
  private CanvasRenderDependencies : CanvasDetails;
  private RenderDetails = new RenderDetails();

  constructor
    (
      private http: HttpService,
      private renderingService: RenderingService
    ) { }

  ngOnInit() { }

  ngAfterViewInit() {
    console.log(this.GlobalScrollCanvas)
    this.GlobalScrollCanvasElement = this.GlobalScrollCanvas.nativeElement;
    this.GlobalScrollCanvasElementContext = this.GlobalScrollCanvasElement.getContext("2d");
    this.GlobalLeftMarginElement = this.GlobalLeftMargin.nativeElement;
    this.CanvasRenderDependencies = {
        CanvasTotalWidth : this.GlobalLeftMarginElement.getBoundingClientRect().width,
        CanvasTotalHeight : this.GlobalLeftMarginElement.getBoundingClientRect().height
    };
    console.log(this.CanvasRenderDependencies)
    this.GlobalScrollCanvasElement.width = this.CanvasRenderDependencies.CanvasTotalWidth;
    this.GlobalScrollCanvasElement.height = this.CanvasRenderDependencies.CanvasTotalHeight;
    this.GlobalScrollCanvasElementContext.beginPath();
    this.GlobalScrollCanvasElementContext.rect(this.CanvasRenderDependencies.CanvasTotalWidth / 1.15 - 5, 0, this.CanvasRenderDependencies.CanvasTotalWidth ,this.CanvasRenderDependencies.CanvasTotalHeight);
    this.GlobalScrollCanvasElementContext.fillStyle = "#add8e6";
    this.GlobalScrollCanvasElementContext.fill();
    this.GlobalScrollCanvasElementContext.closePath();
  }
}
