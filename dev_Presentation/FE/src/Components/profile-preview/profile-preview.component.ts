import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { HttpService } from 'src/Services/http.service';
import { RenderingService } from "src/Services/rendering.service";
import { RenderDetails } from "src/Classes/renderDetails";
import { CanvasDetails } from "src/Interfaces/CanvasDetails";
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './profile-preview.component.html',
  styleUrls: ['./profile-preview.component.scss']
})
export class ProfilePreviewComponent implements OnInit, AfterViewInit {
  title = 'FE';

  @ViewChild("GlobalScrollCanvas", { static: true }) GlobalScrollCanvas: ElementRef;
  @ViewChild("GlobalLeftMargin", { static: true }) GlobalLeftMargin: ElementRef;

  private GlobalScrollCanvasElement: HTMLCanvasElement;
  private GlobalLeftMarginElement: HTMLDivElement;
  private GlobalScrollCanvasElementContext: CanvasRenderingContext2D;
  private CanvasRenderDependencies: CanvasDetails;
  private RenderDetails = new RenderDetails();
  private ResizeTimeout = null;

  constructor
    (
      private http: HttpService,
      private renderingService: RenderingService,
      private activateRoute: ActivatedRoute
    ) { }

  ngOnInit() {
    console.log(this.activateRoute.snapshot.data)
  }

  ngAfterViewInit() {
    this.GlobalScrollCanvasElement = this.GlobalScrollCanvas.nativeElement;
    this.GlobalScrollCanvasElementContext = this.GlobalScrollCanvasElement.getContext("2d");
    this.GlobalLeftMarginElement = this.GlobalLeftMargin.nativeElement;
    this.drawCanvas();
    window.onresize = e => {
      clearTimeout(this.ResizeTimeout);
      this.ResizeTimeout = setTimeout(() => {
        this.drawCanvas();
      }, 100);
    }
  }

  drawCanvas() {
    this.CanvasRenderDependencies = {
      CanvasTotalWidth: this.GlobalLeftMarginElement.getBoundingClientRect().width,
      CanvasTotalHeight: this.GlobalLeftMarginElement.getBoundingClientRect().height
    };
    this.GlobalScrollCanvasElement.width = this.CanvasRenderDependencies.CanvasTotalWidth;
    this.GlobalScrollCanvasElement.height = this.CanvasRenderDependencies.CanvasTotalHeight;
    this.GlobalScrollCanvasElementContext.beginPath();
    this.GlobalScrollCanvasElementContext.rect(this.CanvasRenderDependencies.CanvasTotalWidth / 1.15 - 5, 0, this.CanvasRenderDependencies.CanvasTotalWidth, this.CanvasRenderDependencies.CanvasTotalHeight);
    this.GlobalScrollCanvasElementContext.fillStyle = "#add8e6";
    this.GlobalScrollCanvasElementContext.fill();
    this.GlobalScrollCanvasElementContext.closePath();
  }
}
