import { Directive, ElementRef, Renderer2, Input, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appImageLoad]'
})
export class ImageLoadDirective implements AfterViewInit {

  @Input() skill: string = '';

  private el!: ElementRef;
  constructor(
    private e: ElementRef,
    private r: Renderer2
  ) {
    this.el = e;
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    const loadingImage: HTMLImageElement = this.r.selectRootElement(`.img${this.skill}`);
    const container: HTMLDivElement = this.el.nativeElement;
    this.r.setAttribute(container.firstElementChild, 'style', `line-height:${container.getBoundingClientRect().height}px`);
    this.r.listen(loadingImage, 'load', () => {
      this.r.addClass(loadingImage, 'fadeIn');
      this.r.removeChild(container, container.firstElementChild);
    });
    if (window.ontouchstart === null) {
      if (container.ontouchend === null) this.r.listen(container, 'click', () => this.skillContainerMouseEnter(container));
    } else {
      this.r.listen(container, 'mouseenter', () => this.skillContainerMouseEnter(container));
      this.r.listen(container, 'mouseout', () => this.skillContainerMouseOut(container));
    }
  }

  skillContainerMouseEnter(container: HTMLDivElement) {
    console.log('mouse over')
  }

  skillContainerMouseOut(container: HTMLDivElement) {
    console.log('mouse out')
  }
}
