import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { HttpService } from 'src/Services/http.service';
import { RenderingService } from "src/Services/rendering.service";
import { RenderDetails } from "src/Classes/renderDetails";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'FE';

  @ViewChild("scrollCanvas", { static: true }) scrollCanvas: ElementRef;
  private scrollCanvasContext: CanvasRenderingContext2D;

  private renderDetails = new RenderDetails();

  constructor
    (
      private http: HttpService,
      private renderingService: RenderingService
    ) {

  }

  ngOnInit() {
    console.log(this.renderDetails)
  }

  ngAfterViewInit() {
    this.scrollCanvasContext = (<HTMLCanvasElement>this.scrollCanvas.nativeElement).getContext("2d");
    const ctx = this.scrollCanvasContext;
  }
}
