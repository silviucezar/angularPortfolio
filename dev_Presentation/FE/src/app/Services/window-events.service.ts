import { Injectable, ElementRef, Inject } from '@angular/core';
import { CanvasService } from './canvas.service';
import { CanvasProps } from '../Interfaces/CanvasDetails';
import { BehaviorSubject } from 'rxjs';
import { DOCUMENT } from '@angular/common';
import { UrlSubscriptionFormat } from '../Interfaces/UrlSubscription';

interface InitialSetup {
  urlSubscription: BehaviorSubject<UrlSubscriptionFormat>;
  root: ElementRef;
  NavBarCanvas: CanvasSetup;
  HeaderCanvas: CanvasSetup;
}

interface CanvasSetup {
  name: string;
  canvas: ElementRef
}

interface ViewportOrientation {
  current: string;
  opposite: string;
}

@Injectable({
  providedIn: 'root'
})
export class WindowEventsService {

  private canvasObj: CanvasProps;
  private currentYScrollRef: number;
  private viewportOrientation: ViewportOrientation = {
    current: null,
    opposite: null
  };

  constructor(
    private canvasService: CanvasService,
    @Inject(DOCUMENT) private _document: Document
  ) { }

  init(initialSetup: InitialSetup) {
    initialSetup.urlSubscription.subscribe(url => { if (url.dataToFetch !== null) this.canvasService.setCanvas('NavBar', initialSetup.NavBarCanvas.canvas, url.dataToFetch); });
    this.canvasService.setCanvas('Header', initialSetup.HeaderCanvas.canvas);
    this.canvasObj = this.canvasService.getCanvas();
    this.currentYScrollRef = this.canvasObj.NavBar.settings.currentIndex * this.canvasObj.NavBar.settings.heightRef;
    this.setAppStyle(initialSetup.root);
  }

  setAppStyle(root: ElementRef) {
    this.loadCurrentOrientationCSS(root)
      .then((root: ElementRef) => {
        this.setScrollEvent();
        this.setResizeEvent(root);
      })
      .catch(() => {
        //load error here (usually most probably because internet connection)
      });
  }

  loadCurrentOrientationCSS(root: ElementRef, count?: number): Promise<any> {
    this.viewportOrientation.current = screen.orientation.type.replace(/-([a-z]+)/gi, '');
    this.viewportOrientation.opposite = this.viewportOrientation.current === 'portrait' ? 'landscape' : 'portrait';
    root.nativeElement.style.width = this._document.documentElement.clientWidth + 'px';
    root.nativeElement.style.height = this._document.documentElement.clientHeight + 'px';
    return new Promise((resolve, reject) => {
      const CURRENT_CSS_TO_LOAD = this._document.querySelector(`#current-css-mobile-${this.viewportOrientation.current}`) as HTMLLinkElement;
      const OPPOSITE_CSS_TO_LOAD = this._document.querySelector(`#current-css-mobile-${this.viewportOrientation.opposite}`) as HTMLLinkElement;
      if (CURRENT_CSS_TO_LOAD.href === '') {
        CURRENT_CSS_TO_LOAD.href = `mobile-${this.viewportOrientation.current}-css.css`;
        CURRENT_CSS_TO_LOAD.onload = () => onSuccesfullCSSLoad();
        CURRENT_CSS_TO_LOAD.onerror = () => {
          setTimeout(() => {
            if (count === 10) return this.loadCurrentOrientationCSS(root, count ? 0 : count++);
            reject();
          }, 500);
        }
      } else {
        onSuccesfullCSSLoad();
      }

      function onSuccesfullCSSLoad() {
        CURRENT_CSS_TO_LOAD.disabled = false;
        OPPOSITE_CSS_TO_LOAD.disabled = true;
        resolve(root);
      }
    });
  }


  setScrollEvent() {
    const SELF = this;
    let touchStartY: number;

    window.onwheel = (event: WheelEvent) => {
      toggleHeader(event);
      // this.canvasObj.NavBar.ctx.beginPath();
      // this.canvasObj.NavBar.ctx.rect(this.canvasObj.NavBar.width * 0.98, this.currentYScrollRef, this.canvasObj.NavBar.width * 0.02, this.canvasObj.NavBar.settings.heightRef);
      // this.canvasObj.NavBar.ctx.stroke();
      // this.canvasObj.NavBar.ctx.closePath();
    }

    if (window.ontouchmove === null) {
      window.ontouchstart = (event: TouchEvent) => {
        touchStartY = event.touches[0].clientY;
      };
      window.ontouchend = (event: TouchEvent) => {
        toggleHeader(event);
      }
    }

    function toggleHeader(event: WheelEvent | TouchEvent) {
      SELF._document.querySelector("#App_Global_Grid").className = (() => {
        if (event instanceof WheelEvent) {
          return event.deltaY > 0 ? 'contracted' : "extended";
        } else if (event instanceof TouchEvent) {
          return touchStartY > event.changedTouches[0].clientY ? 'contracted' : "extended";
        }
      })();
    }
  }


  setResizeEvent(root: ElementRef) {
    window.onresize = e => {
      setTimeout(() => { this.setAppStyle(root) }, 50);
    };
  }
}