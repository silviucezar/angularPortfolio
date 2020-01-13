import { Injectable, ElementRef, Inject } from '@angular/core';
import { CanvasService } from './canvas.service';
import { CanvasProps } from '../Interfaces/CanvasDetails';
import { BehaviorSubject } from 'rxjs';
import { DOCUMENT } from '@angular/common';

interface InitialSetup {
  urlSubscription: BehaviorSubject<string>;
  root: ElementRef;
  NavBarCanvas: CanvasSetup;
  HeaderCanvas: CanvasSetup;
}

interface CanvasSetup {
  name: string;
  canvas: ElementRef
}

interface AppRootDimensionsConfig {
  initialLoad?: Boolean;
  isOrientationChange?: Boolean;
}

@Injectable({
  providedIn: 'root'
})
export class WindowEventsService {

  private canvasObj: CanvasProps;
  private currentYScrollRef: number;
  private currentOrientation: string;
  private mobileAvailSizeRefOne: number = window.innerWidth;
  private mobileAvailSizeRefTwo: number = window.innerHeight;
  constructor(
    private canvasService: CanvasService,
    @Inject(DOCUMENT) private _document: Document
  ) { }
  init(initialSetup: InitialSetup) {
    initialSetup.urlSubscription.subscribe(url => { if (url) this.canvasService.setCanvas('NavBar', initialSetup.NavBarCanvas.canvas, url); })
    this.setAppRootDimensions(initialSetup.root);
    this.canvasService.setCanvas('Header', initialSetup.HeaderCanvas.canvas)
    this.setScrollEvent();
    this.setResizeEvent(initialSetup.root);
  }

  setAppRootDimensions(root: ElementRef, config?: AppRootDimensionsConfig) {
    this.loadCurrentOrientationCSS();
  }

  loadCurrentOrientationCSS() {
    this.currentOrientation = screen.orientation.type;
      this.mobileAvailSizeRefOne = window.innerWidth;
      this.mobileAvailSizeRefTwo = window.innerHeight;
      if (screen.orientation.type.match(/portrait/)) {
        (this._document.querySelector("#current-css") as HTMLLinkElement).href = 'mobile-portrait-css.css';
      } else {
        (this._document.querySelector("#current-css") as HTMLLinkElement).href = 'mobile-landscape-css.css';
      }
  }

  setScrollEvent() {
    this.canvasService.getCanvas().subscribe(canvasObj => {
      this.canvasObj = canvasObj;
      this.currentYScrollRef = this.canvasObj.NavBar.settings.currentIndex * this.canvasObj.NavBar.settings.heightRef
    });
    window.onwheel = e => {
      console.log('Scroll Event:', this.currentYScrollRef);
      this.canvasObj.NavBar.ctx.beginPath();
      this.canvasObj.NavBar.ctx.rect(this.canvasObj.NavBar.width * 0.98, this.currentYScrollRef, this.canvasObj.NavBar.width * 0.02, this.canvasObj.NavBar.settings.heightRef);
      this.canvasObj.NavBar.ctx.stroke();
      this.canvasObj.NavBar.ctx.closePath();
    }
    console.log('Scroll event set');
  }

  setResizeEvent(root: ElementRef) {
    window.onresize = (e) => {
      setTimeout(() => { this.setAppRootDimensions(root) }, 100);
    };
  }
}


//https://juristr.com/blog/2019/08/dynamically-load-css-angular-cli/