import { Injectable, ElementRef, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { CanvasSetup } from '../Classes/canvasSetup';
import { CanvasService } from './canvas.service';
import { ContainerRefs, ComponentsMetadata } from '../Interfaces/ComponentsMetadata';
import { DataService } from './data.service';
import { LazyService } from './lazy.service';

interface ViewportOrientation {
  current: string;
  opposite: string;
}

@Injectable({
  providedIn: 'root'
})
export class InitService {

  private canvasSetup!: CanvasSetup;
  private wasInit: Boolean = false;
  private currentYScrollRef!: number;
  private viewportOrientation: ViewportOrientation = {
    current: '',
    opposite: ''
  };

  constructor(
    private canvasService: CanvasService,
    private dataService: DataService,
    private lazyService: LazyService,
    @Inject(DOCUMENT) private _document: Document
  ) { }

  init(domRootElementRef: ElementRef, containerRefs: ContainerRefs) {
    this.loadCurrentOrientationCSS(domRootElementRef)
      .then(() => {
        this.canvasSetup = new CanvasSetup(
          (this._document.querySelector('#navBarCanvas') as HTMLCanvasElement),
          (this._document.querySelector('#navBarCanvas') as HTMLCanvasElement)
        )
        if (!this.wasInit) {
          this.setScrollEvent();
          this.setResizeEvent(domRootElementRef);
          this.wasInit = true;
        }
        this.lazyService.setContainerRefs(containerRefs);
        // this.dataService.getRoutesData().subscribe((componentsMetadata:ComponentsMetadata) => {
        //   this.lazyService.load(componentsMetadata.currentUrl);
        // });
      })
      .catch(() => {
        //load error here (usually most probably because internet connection)
      });
    // initialSetup.urlSubscription.subscribe(url => { if (url.dataToFetch !== null) this.canvasService.setCanvas('NavBar', initialSetup.NavBarCanvas.canvas, url.dataToFetch); });
    // this.canvasService.setCanvas('Header', initialSetup.HeaderCanvas.canvas);
    // this.canvasObj = this.canvasService.getCanvas();
    // this.currentYScrollRef = this.canvasObj.NavBar.settings.currentIndex * this.canvasObj.NavBar.settings.heightRef;
  }

  setAppStyle(domRootElementRef: ElementRef) {
    this.loadCurrentOrientationCSS(domRootElementRef)
  }

  loadCurrentOrientationCSS(domRootElementRef: ElementRef, count?: number): Promise<void> {
    this.viewportOrientation.current = screen.orientation.type.replace(/-([a-z]+)/gi, '');
    this.viewportOrientation.opposite = this.viewportOrientation.current === 'portrait' ? 'landscape' : 'portrait';
    domRootElementRef.nativeElement.style.width = this._document.documentElement.clientWidth + 'px';
    domRootElementRef.nativeElement.style.height = this._document.documentElement.clientHeight + 'px';
    return new Promise((resolve, reject) => {
      const CURRENT_CSS_TO_LOAD = this._document.querySelector(`#current-css-mobile-${this.viewportOrientation.current}`) as HTMLLinkElement;
      const OPPOSITE_CSS_TO_LOAD = this._document.querySelector(`#current-css-mobile-${this.viewportOrientation.opposite}`) as HTMLLinkElement;
      if (CURRENT_CSS_TO_LOAD.href === '') {
        CURRENT_CSS_TO_LOAD.href = `mobile-${this.viewportOrientation.current}-css.css`;
        CURRENT_CSS_TO_LOAD.onload = () => onSuccesfullCSSLoad();
        CURRENT_CSS_TO_LOAD.onerror = () => {
          setTimeout(() => {
            if (count === 10) return this.loadCurrentOrientationCSS(domRootElementRef, count ? 0 : count++);
            reject();
          }, 500);
        }
      } else {
        onSuccesfullCSSLoad();
      }

      function onSuccesfullCSSLoad() {
        CURRENT_CSS_TO_LOAD.disabled = false;
        OPPOSITE_CSS_TO_LOAD.disabled = true;
        resolve();
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
      SELF._document.querySelector("#appGlobalGrid")!.className = ((): string => {
        if (event instanceof WheelEvent) {
          return event.deltaY > 0 ? 'contracted' : "extended";
        } else if (event instanceof TouchEvent) {
          return touchStartY > event.changedTouches[0].clientY ? 'contracted' : "extended";
        } else {
          return '';
        }
      })();
    }
  }


  setResizeEvent(root: ElementRef) {
    // window.onresize = e => {
    //   setTimeout(() => { this.setAppStyle(root) }, 50);
    // };
  }
}