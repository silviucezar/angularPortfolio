import { Injectable, ElementRef, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { CanvasSetup } from '../Classes/canvasSetup';
import { CanvasService } from './canvas.service';

interface ViewportOrientation {
  activeOrientation: string;
  inactiveOrientation: string;
  CSS: {
    portrait: {
      loaded: boolean,
      element: HTMLLinkElement
    };
    landscape: {
      loaded: boolean,
      element: HTMLLinkElement
    };
  }
}

@Injectable({
  providedIn: 'root'
})
export class InitService {

  private canvasSetup!: CanvasSetup;
  private wasInit: boolean = false;
  private currentYScrollRef!: number;
  private viewport: ViewportOrientation = {
    activeOrientation: '',
    inactiveOrientation: '',
    CSS: {
      portrait: {
        loaded: false,
        element: (this._document.querySelector("#portrait-style") as HTMLLinkElement)
      },
      landscape: {
        loaded: false,
        element: (this._document.querySelector("#landscape-style") as HTMLLinkElement)
      }
    }
  };


  constructor(
    private canvasService: CanvasService,
    @Inject(DOCUMENT) private _document: Document
  ) { }

  init(domRootElementRef: ElementRef, isInit?: boolean) {
    this.viewport.activeOrientation = screen.orientation.type.replace(/-([a-z]+)/gi, '');
    this.viewport.inactiveOrientation = this.viewport.activeOrientation === 'portrait' ? 'landscape' : 'portrait';
    this.enableCurrentOrientationCSS(domRootElementRef)
      .then(() => {
        if (isInit) {
          this.canvasSetup = new CanvasSetup(
            (this._document.querySelector('#navBarCanvas') as HTMLCanvasElement),
            (this._document.querySelector('#navBarCanvas') as HTMLCanvasElement)
          )
          this.setScrollEvent();
          this.setResizeEvent(domRootElementRef);
          this.wasInit = true;
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

  canvasInit() {

  }

  setAppStyle(domRootElementRef: ElementRef) {
    if (this.viewport.activeOrientation !== screen.orientation.type.replace(/-([a-z]+)/gi, '')) {
      this.viewport.activeOrientation = screen.orientation.type.replace(/-([a-z]+)/gi, '');
      this.viewport.inactiveOrientation = this.viewport.activeOrientation === 'portrait' ? 'landscape' : 'portrait';
      if (this.viewport.CSS[this.viewport.activeOrientation as 'portrait' | 'landscape'].loaded === false) {
        this.toggleGlobalLoading(true);
      }
    }
    this.enableCurrentOrientationCSS(domRootElementRef).then(() => { this.canvasInit() });
  }

  enableCurrentOrientationCSS(domRootElementRef: ElementRef, count?: number): Promise<void> {
    domRootElementRef.nativeElement.style.width = `${this._document.documentElement.clientWidth}px`;
    domRootElementRef.nativeElement.style.height = `${this._document.documentElement.clientHeight}px`;
    const self = this;
    const activeOrientation = this.viewport.activeOrientation as 'landscape' | 'portrait';
    const inactiveOrientation = this.viewport.inactiveOrientation as 'landscape' | 'portrait';
    return new Promise((resolve, reject) => {
      if (this.viewport.CSS[activeOrientation].element.href === '') {
        this.viewport.CSS[activeOrientation].element.href = `${this.viewport.activeOrientation}-css.css`;
        this.viewport.CSS[activeOrientation].element.disabled = false;
        this.viewport.CSS[activeOrientation].element.addEventListener('load', () => {
          this.viewport.CSS[activeOrientation].loaded = true;
          this.toggleGlobalLoading();
          onSuccesfullCSSLoad(true);
        });
        this.viewport.CSS[activeOrientation].element.addEventListener('error', () => {
          setTimeout(() => {
            if (count === 10) return this.enableCurrentOrientationCSS(domRootElementRef, count ? 0 : count++);
            reject();
          }, 500);
        });
      } else {
        onSuccesfullCSSLoad();
      }

      function onSuccesfullCSSLoad(currentLayoutJustLoaded?: boolean) {
        if (currentLayoutJustLoaded) {
          self.viewport.CSS[inactiveOrientation].element.disabled = true;
        } else {
          self.viewport.CSS[activeOrientation].element.disabled = false;
          self.viewport.CSS[inactiveOrientation].element.disabled = true;
        }
        resolve();
      }
    });
  }


  setScrollEvent() {
    const self = this;
    let touchStartY: number;

    window.onwheel = (event: WheelEvent) => {
      toggleHeader(event);

    }

    // if (window.ontouchmove === null) {
    //   window.ontouchstart = (event: TouchEvent) => {
    //     touchStartY = event.touches[0].clientY;
    //   };
    //   window.ontouchend = (event: TouchEvent) => {
    //     toggleHeader(event);
    //   }
    // }

    function toggleHeader(event: WheelEvent | TouchEvent) {
      self._document.querySelector("#appGlobalGrid")!.className = ((): string => {
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
      if (this.viewport.activeOrientation !== screen.orientation.type.replace(/-([a-z]+)/gi, '')) {
        this.setAppStyle(root);
      }
      setTimeout(() => { this.setAppStyle(root) }, 100);
    };
  }

  toggleGlobalLoading(displayLoading?: boolean) {
    if (displayLoading) {
      (this._document.querySelector("#appGlobalLoader") as HTMLDivElement).classList.toggle('active');
    } else {
      setTimeout(() => {
        (this._document.querySelector("#appGlobalLoader") as HTMLDivElement).classList.toggle('active');
      }, 500);
    }
  }
}