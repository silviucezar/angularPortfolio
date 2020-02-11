import { Injectable, ElementRef, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { LazyService } from './lazy.service';
import { ContainerRefs, Viewport, UrlSubscription, ContentComponentsPosition } from '../Interfaces/interfaces';
import { PageLogic } from './page.logic.service';
import { UrlListenerService } from './url-listener.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InitService {

  private urlSubscription!: UrlSubscription;
  private scrollInit: boolean = true;
  private viewport: Viewport = {
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

  public currentUrl$: BehaviorSubject<string> = new BehaviorSubject<string>('about-me');

  constructor(
    @Inject(DOCUMENT) private _document: Document,
    private lazyService: LazyService,
    private pageLogic: PageLogic,
    private urlListener: UrlListenerService
  ) { }

  init(domRootElementRef: ElementRef, containerRefs: ContainerRefs) {
    this.lazyService.setContainerRefs(containerRefs);
    this.viewport.activeOrientation = screen.orientation.type.replace(/-([a-z]+)/gi, '');
    this.viewport.inactiveOrientation = this.viewport.activeOrientation === 'portrait' ? 'landscape' : 'portrait';
    this.enableCurrentOrientationCSS(domRootElementRef)
      .then(() => {
        this.setResizeEvent(domRootElementRef);
      });
  }

  setAppStyle(domRootElementRef: ElementRef) {
    this.addGlobalLoading();
    if (this.viewport.activeOrientation !== screen.orientation.type.replace(/-([a-z]+)/gi, '')) {
      this.viewport.activeOrientation = screen.orientation.type.replace(/-([a-z]+)/gi, '');
      this.viewport.inactiveOrientation = this.viewport.activeOrientation === 'portrait' ? 'landscape' : 'portrait';
      if (this.viewport.CSS[this.viewport.activeOrientation as 'portrait' | 'landscape'].loaded === false) {
        this.setContentComponentsPosition();
        this.removeGlobalLoading();
      }
    }
    this.enableCurrentOrientationCSS(domRootElementRef).then(() => {
      this.removeGlobalLoading();
      this.setContentComponentsPosition();
    });
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
    this.scrollInit = false;
    const globalContentContainer = this._document.querySelector(".appGlobalContent")!;
    const self = this;
    let touchStartY: number;
    let touchStartX: number;
    let containerScrollTop: number;
    this.setContentComponentsPosition();

    try {
      globalContentContainer.scrollTo({
        top: this.viewport.contentComponentsPosition![this.urlListener.currentCompoentKey as keyof ContentComponentsPosition].component.offsetTop - 500,
        behavior: "auto"
      });
    } catch (e) { };

    this.urlListener.urlSubscriptionBehaviorSubject$.subscribe((urlSubscription: UrlSubscription) => {
      if (urlSubscription.dataToFetch.match(/skills|jobs/)) return;
      this.urlSubscription = urlSubscription;
      setTimeout(() => {
        globalContentContainer.scrollTo({
          top: urlSubscription.dataToFetch === 'about_me' ? 0 : this.viewport.contentComponentsPosition![urlSubscription.dataToFetch as 'about_me'].component.offsetTop - 200,
          behavior: "smooth"
        });
        setTimeout(() => {
          self.pageLogic.fadeInContent();
        }, 200);
      }, self._document.querySelector("#appGlobalGrid")!.className === 'contracted' ? 0 : 100);
      self._document.querySelector("#appGlobalGrid")!.className = 'contracted';
    });

    window.onwheel = (event: WheelEvent) => {
      containerScrollTop = globalContentContainer.scrollTop;
      triggerContentScroll<WheelEvent>(event);
    }

    if (window.ontouchmove === null) {
      window.ontouchstart = (event: TouchEvent) => {
        touchStartY = event.touches[0].clientY;
        touchStartX = event.touches[0].clientX;
        containerScrollTop = globalContentContainer.scrollTop;
      }
      window.ontouchend = (event: TouchEvent) => triggerContentScroll<TouchEvent>(event);
    }

    function triggerContentScroll<T>(event: T) {
      self.setContentComponentsPosition();
      self.pageLogic.fadeInContent();
      if (self.pageLogic.skillsState$.value || self.pageLogic.jobsState$.value) {
        if (event instanceof TouchEvent) {
          const carousel = self._document.querySelector(".carousel");
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

  removeGlobalLoading(initScroll?: boolean) {
    setTimeout(() => {
      (this._document.querySelector("#appGlobalLoader") as HTMLDivElement).classList.remove('active');
    }, 500);
    if (this.scrollInit && initScroll) this.setScrollEvent();
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
    slidesContainer.style.transform = `translateX(${-(slidesContainer.getBoundingClientRect().width * slideIndex)}px)`;
  }

  setContentComponentsPosition() {
    this.viewport.contentComponentsPosition = {
      about_me: {
        url: 'about-me',
        component: this._document.querySelector("#about_me") as HTMLElement
      },
      education: {
        url: 'education',
        component: this._document.querySelector("#education") as HTMLElement
      },
      references: {
        url: 'references',
        component: this._document.querySelector("#references") as HTMLElement
      },
      leave_message: {
        url: 'leave_message',
        component: this._document.querySelector("#leave_message") as HTMLElement
      }
    }
  }
}