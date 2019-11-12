import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { HttpService } from 'src/Services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'FE';

  @ViewChild("scrollCanvas", { static: true }) scrollCanvas: ElementRef;
  private scrollCanvasContext: CanvasRenderingContext2D;
  private rendering: object = {
    orientation: null,
    window: window,
    sizes: {
      width: null,
      height: null
    }
  }

  constructor
    (
      private http: HttpService
    ) { }

  ngOnInit() {
    console.log(navigator)
    console.log(window)

  }

  ngAfterViewInit() {
    this.scrollCanvasContext = (<HTMLCanvasElement>this.scrollCanvas.nativeElement).getContext("2d");
    const ctx = this.scrollCanvasContext;
    ctx
  }

  testvideo(e) {
    console.log(e);
  }
}
