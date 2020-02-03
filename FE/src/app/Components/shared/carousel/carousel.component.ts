import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})

export class CarouselComponent implements OnInit {

  @Input() private slidesCount!: number;

  private slideIndex: number = 0;
  private translateValue: string = '0px';

  constructor(
    private rootElement: ElementRef
  ) { }

  ngOnInit() { }

  displayCurrentContent(indexQuantifier: number) {
    switch (true) {
      case this.slideIndex + indexQuantifier === this.slidesCount:
        this.slideIndex = 0;
        break;
      case this.slideIndex + indexQuantifier === -1:
        this.slideIndex = this.slidesCount;
        break;
      default:
        this.slideIndex = this.slideIndex + indexQuantifier;
    }
    console.log(this.rootElement)
    this.translateValue = `${-(this.rootElement.nativeElement.querySelector('.slides').getBoundingClientRect().width * this.slideIndex)}px`;
  }
}
