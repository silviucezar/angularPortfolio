import { Component, OnInit, Input, Output, EventEmitter, TemplateRef, ElementRef } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})

export class CarouselComponent implements OnInit {

  @Input() private carouselContent?: TemplateRef<HTMLDivElement>;
  @Input() private slidesCount!: number;
  @Output() private onContentIndexChange = new EventEmitter();

  private slideIndex: number = 0;

  constructor() { }

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
    this.onContentIndexChange.emit(this.slideIndex);
  }
}
