import { Injectable, ElementRef, Inject, ɵSWITCH_ELEMENT_REF_FACTORY__POST_R3__ } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { LazyService } from './lazy.service';
import { ContainerRefs } from '../Interfaces/interfaces';
import { PageLogic } from './page.logic.service';

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
    @Inject(DOCUMENT) private _document: Document,
    private lazyService: LazyService,
    private pageLogic: PageLogic
  ) { }

  init(domRootElementRef: ElementRef, containerRefs: ContainerRefs) {
    this.lazyService.setContainerRefs(containerRefs);
    this.viewport.activeOrientation = screen.orientation.type.replace(/-([a-z]+)/gi, '');
    this.viewport.inactiveOrientation = this.viewport.activeOrientation === 'portrait' ? 'landscape' : 'portrait';
    this.enableCurrentOrientationCSS(domRootElementRef)
      .then(() => {
        this.setScrollEvent();
        this.setResizeEvent(domRootElementRef);
      });
  }

  setAppStyle(domRootElementRef: ElementRef) {
    this.addGlobalLoading();
    if (this.viewport.activeOrientation !== screen.orientation.type.replace(/-([a-z]+)/gi, '')) {
      this.viewport.activeOrientation = screen.orientation.type.replace(/-([a-z]+)/gi, '');
      this.viewport.inactiveOrientation = this.viewport.activeOrientation === 'portrait' ? 'landscape' : 'portrait';
      if (this.viewport.CSS[this.viewport.activeOrientation as 'portrait' | 'landscape'].loaded === false) {
        this.removeGlobalLoading();
      }
    }
    this.enableCurrentOrientationCSS(domRootElementRef).then(()=> this.removeGlobalLoading());
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
    const globalContentContainer = this._document.querySelector(".appGlobalContent")!;
    const self = this;
    let touchStartY: number;
    let touchStartX: number;
    let containerScrollTop: number;
    window.onwheel = (event: WheelEvent) => triggerPageScrollOrTouchEvent<WheelEvent>(event);

    if (window.ontouchmove === null) {
      window.ontouchstart = (event: TouchEvent) => {
        touchStartY = event.touches[0].clientY;
        touchStartX = event.touches[0].clientX;
        containerScrollTop = globalContentContainer.scrollTop;
      }
      window.ontouchend = (event: TouchEvent) => triggerPageScrollOrTouchEvent<TouchEvent>(event);
    }

    function triggerPageScrollOrTouchEvent<T>(event: T) {
      if (self.pageLogic.skillsState$.value || self.pageLogic.jobsState$.value) {
        if (event instanceof TouchEvent) {
          const carousel = self._document.querySelector(".carousel");
          console.log(event)
          if (event.changedTouches[0].clientY > carousel!.getBoundingClientRect().top && !(event.target as any).className.match(/((previous|next)content)|closeBtn/)) {
            if (event.changedTouches[0].clientX <= touchStartX) {
              self.displaySlidesContent(1);
            } else {
              self.displaySlidesContent(-1);
            }
          }
        }
      } else {
        if (containerScrollTop && containerScrollTop !== 0) return;
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
      self.pageLogic.fadeInContent();
    }
  }

  setResizeEvent(root: ElementRef) {
    window.onresize = () => {
      if (this.viewport.activeOrientation !== screen.orientation.type.replace(/-([a-z]+)/gi, '')) {
        this.setAppStyle(root);
      } else {
        setTimeout(() => { this.setAppStyle(root) }, 100);
      }
    };
  }

  addGlobalLoading() {
    (this._document.querySelector("#appGlobalLoader") as HTMLDivElement).classList.add('active');
  }

  removeGlobalLoading() {
    setTimeout(()=>{
      (this._document.querySelector("#appGlobalLoader") as HTMLDivElement).classList.remove('active');
    },500);
  }

  displaySlidesContent(indexQuantifier: number) {
    const carousel: HTMLDivElement = this._document.querySelector('.activeModalGrid .carousel') as HTMLDivElement;
    const slidesContainer: HTMLDivElement = this._document.querySelector('.activeModalGrid .slides') as HTMLDivElement;
    const slidesCount: number = this._document.querySelectorAll('.activeModalGrid .slideContainer').length;
    let slideIndex: number = parseInt(carousel.getAttribute('data-slide-index')!);
    switch (true) {
      case slideIndex + indexQuantifier === slidesCount:
        slideIndex = 0;
        break;
      case slideIndex + indexQuantifier === -1:
        slideIndex = slidesCount - 1;
        break;
      default:
        slideIndex = slideIndex + indexQuantifier;
    }
    carousel.setAttribute('data-slide-index', slideIndex.toString());
    console.log(slidesContainer.getBoundingClientRect())
    slidesContainer.style.transform = `translateX(${-(slidesContainer.getBoundingClientRect().width * slideIndex)}px)`;
  }
}