import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { HttpService } from 'src/Services/http.service';
import { RenderingService } from "src/Services/rendering.service";
import { BehaviorSubject, Observable } from 'rxjs';
import { RenderDetails } from "src/Interfaces/renderDetails";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'FE';

  @ViewChild("scrollCanvas", { static: true }) scrollCanvas: ElementRef;
  private scrollCanvasContext: CanvasRenderingContext2D;

  renderDetails: RenderDetails;

  constructor
    (
      private http: HttpService,
      private renderingService: RenderingService
    ) {
    this.renderingService.getRenderDetails().subscribe(renderDetails => {
      this.renderDetails = renderDetails;
    });
  }

  ngOnInit() {
    console.log(navigator)
    console.log(window)
    console.log(this.renderDetails);
  }

  ngAfterViewInit() {
    this.scrollCanvasContext = (<HTMLCanvasElement>this.scrollCanvas.nativeElement).getContext("2d");
    const ctx = this.scrollCanvasContext;
  }

  testvideo(e) {
    console.log(e);
  }
}
