import { Directive, ElementRef, Renderer2, Input, AfterViewInit, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appImageLoad]'
})
export class ImageLoadDirective implements AfterViewInit {

  @Input() skill: string = '';
  @Output() onExpandingEvent = new EventEmitter();

  private el!: ElementRef;
  private isExpanded: boolean = false;

  constructor(
    private e: ElementRef,
    private r: Renderer2
  ) {
    this.el = e;
  }

  ngOnInit() {

  }

  ngAfterViewInit() {

    // if (window.ontouchstart === null) {
    //   if (container.ontouchend === null) this.r.listen(container, 'click', () => this.skillContainerMouseEnter(container));
    // } else {
    //   this.r.listen(container, 'mouseenter', () => this.skillContainerMouseEnter(container));
    //   this.r.listen(container, 'mouseout', () => this.skillContainerMouseOut(container));
    // }
  }

  skillContainerMouseEnter(container: HTMLDivElement) {
    this.isExpanded = !this.isExpanded;
    this.onExpandingEvent.emit(this.isExpanded);
    console.log('mouse over')
  }

  skillContainerMouseOut(container: HTMLDivElement) {
    console.log('mouse out')
  }
}
