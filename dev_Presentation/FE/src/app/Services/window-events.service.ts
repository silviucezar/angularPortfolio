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
  initialInit: Boolean;
}

interface ScreenOrientation {
  initial: string;
  current: string;
}

@Injectable({
  providedIn: 'root'
})
export class WindowEventsService {

  private canvasObj: CanvasProps;
  private currentYScrollRef: number;
  private orientation: ScreenOrientation = {
    initial: null,
    current: null
  }
  private mobileAvailSizeRefOne: number = window.innerWidth;
  private mobileAvailSizeRefTwo: number = window.innerHeight;
  constructor(
    private canvasService: CanvasService,
    @Inject(DOCUMENT) private _document: Document
  ) { }
  init(initialSetup: InitialSetup) {
    this.setAppStyle(initialSetup.root, { initialInit: true });
    // initialSetup.urlSubscription.subscribe(url => { if (url) this.canvasService.setCanvas('NavBar', initialSetup.NavBarCanvas.canvas, url); })
    // this.canvasService.setCanvas('Header', initialSetup.HeaderCanvas.canvas)
    this.setScrollEvent();
    this.setResizeEvent(initialSetup.root);
  }

  setAppStyle(root: ElementRef, config?: AppRootDimensionsConfig) {
    this.orientation.current = screen.orientation.type.replace(/-([a-z]+)/gi, '');
    if (config.initialInit === true) {
      this.orientation.initial = screen.orientation.type.replace(/-([a-z]+)/gi, '');
      root.nativeElement.style.width = this.mobileAvailSizeRefOne + 'px';
      root.nativeElement.style.height = this.mobileAvailSizeRefTwo + 'px';
    } else {
      if (this.orientation.current === 'portrait') {
        root.nativeElement.style.width = (this.orientation.initial === 'portrait' ? this.mobileAvailSizeRefOne : this.mobileAvailSizeRefTwo) + 'px';
        root.nativeElement.style.height = (this.orientation.initial === 'portrait' ? this.mobileAvailSizeRefTwo : this.mobileAvailSizeRefOne) + 'px';
      } else {
        root.nativeElement.style.width = (this.orientation.initial === 'landscape' ? this.mobileAvailSizeRefOne : this.mobileAvailSizeRefTwo) + 'px';
        root.nativeElement.style.height = (this.orientation.initial === 'landscape' ? this.mobileAvailSizeRefTwo : this.mobileAvailSizeRefOne) + 'px';
      }
    }
    this.loadCurrentOrientationCSS();
  }

  loadCurrentOrientationCSS() {
    if (this.orientation.current === 'portrait') {
      if ((this._document.querySelector("#current-css-mobile-portrait") as HTMLLinkElement).href === '') {
        (this._document.querySelector("#current-css-mobile-portrait") as HTMLLinkElement).href = 'mobile-portrait-css.css';
      }
      (this._document.querySelector("#current-css-mobile-portrait") as HTMLLinkElement).disabled = false;
      (this._document.querySelector("#current-css-mobile-landscape") as HTMLLinkElement).disabled = true;
    } else {
      if ((this._document.querySelector("#current-css-mobile-landscape") as HTMLLinkElement).href === '') {
        (this._document.querySelector("#current-css-mobile-landscape") as HTMLLinkElement).href = 'mobile-landscape-css.css';
      }
      (this._document.querySelector("#current-css-mobile-landscape") as HTMLLinkElement).disabled = false;
      (this._document.querySelector("#current-css-mobile-portrait") as HTMLLinkElement).disabled = true;
    }
  }

  setScrollEvent() {
    this.canvasService.getCanvas().subscribe(canvasObj => {
      this.canvasObj = canvasObj;
      this.currentYScrollRef = this.canvasObj.NavBar.settings.currentIndex * this.canvasObj.NavBar.settings.heightRef
    });
    window.onwheel = window.ontouchmove = e => {
      console.log('Scroll Event:', this.currentYScrollRef);
      console.log(e)
      this._document.querySelector("#App_Global_Grid").className = e.deltaY > 0 ? 'contracted' : "extended";
      // this.canvasObj.NavBar.ctx.beginPath();
      // this.canvasObj.NavBar.ctx.rect(this.canvasObj.NavBar.width * 0.98, this.currentYScrollRef, this.canvasObj.NavBar.width * 0.02, this.canvasObj.NavBar.settings.heightRef);
      // this.canvasObj.NavBar.ctx.stroke();
      // this.canvasObj.NavBar.ctx.closePath();
    }
    console.log('Scroll event set');
  }

  setResizeEvent(root: ElementRef) {
    window.onresize = (e) => {
      setTimeout(() => { this.setAppStyle(root, { initialInit: false }) }, 200);
    };
  }
}


//https://juristr.com/blog/2019/08/dynamically-load-css-angular-cli/