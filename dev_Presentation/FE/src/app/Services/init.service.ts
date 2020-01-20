import { Injectable, ElementRef, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { CanvasSetup } from '../Classes/canvasSetup';
import { CanvasService } from './canvas.service';
import { ContainerRefs } from '../Interfaces/ComponentsMetadata';
import { LazyService } from './lazy.service';

interface ViewportOrientation {
  current: string;
  previous: string;
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
    previous: ''
  };

  constructor(
    private canvasService: CanvasService,
    private lazyService: LazyService,
    @Inject(DOCUMENT) private _document: Document
  ) { }

  init(domRootElementRef: ElementRef, containerRefs: ContainerRefs, isInit?: Boolean) {
    this.loadCurrentOrientationCSS(domRootElementRef)
      .then(() => {
        if (isInit) {
          this.canvasSetup = new CanvasSetup(
            (this._document.querySelector('#navBarCanvas') as HTMLCanvasElement),
            (this._document.querySelector('#navBarCanvas') as HTMLCanvasElement)
          )
          this.setScrollEvent();
          this.setResizeEvent(domRootElementRef);
          this.wasInit = true;
          this.lazyService.setContainerRefs(containerRefs);
        }
        this.canvasInit();
      })
      .catch(() => {
        //load error here (usually most probably because internet connection)
      });
    // initialSetup.urlSubscription.subscribe(url => { if (url.dataToFetch !== null) this.canvasService.setCanvas('NavBar', initialSetup.NavBarCanvas.canvas, url.dataToFetch); });
    // this.canvasService.setCanvas('Header', initialSetup.HeaderCanvas.canvas);
    // this.canvasObj = this.canvasService.getCanvas();
    // this.currentYScrollRef = this.canvasObj.NavBar.settings.currentIndex * this.canvasObj.NavBar.settings.heightRef;
  }

  // initCanvas() {
  //   urlSubscription
  // }

  setAppStyle(domRootElementRef: ElementRef) {
    this.loadCurrentOrientationCSS(domRootElementRef).then(() => { this.canvasInit() });
  }

  canvasInit() {

  }

  loadCurrentOrientationCSS(domRootElementRef: ElementRef, count?: number): Promise<void> {
    this.viewportOrientation.current = screen.orientation.type.replace(/-([a-z]+)/gi, '');
    this.viewportOrientation.previous = this.viewportOrientation.current === 'portrait' ? 'landscape' : 'portrait';
    domRootElementRef.nativeElement.style.width = this._document.documentElement.clientWidth + 'px';
    domRootElementRef.nativeElement.style.height = this._document.documentElement.clientHeight + 'px';
    const currentCSS = this._document.querySelector(`#${this.viewportOrientation.current}-style`) as HTMLLinkElement;
    const previousCSS = this._document.querySelector(`#${this.viewportOrientation.previous}-style`) as HTMLLinkElement;
    return new Promise((resolve, reject) => {
      if (currentCSS.href === '') {
        currentCSS.onload = () => { console.log('trigged'); onSuccesfullCSSLoad() };
        currentCSS.onerror = () => {
          setTimeout(() => {
            if (count === 10) return this.loadCurrentOrientationCSS(domRootElementRef, count ? 0 : count++);
            reject();
          }, 500);
        }
        currentCSS.href = `${this.viewportOrientation.current}-css.css`;
      } else {
        onSuccesfullCSSLoad();
      }

      function onSuccesfullCSSLoad() {
        console.log('previousCSS', previousCSS)
        currentCSS.disabled = false;
        previousCSS.disabled = true;
        resolve();
      }
    });
  }


  setScrollEvent() {
    const SELF = this;
    let touchStartY: number;

    window.onwheel = (event: WheelEvent) => {
      toggleHeader(event);

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
    window.onresize = () => {
      setTimeout(() => { this.setAppStyle(root) }, 100);
    };
  }
}