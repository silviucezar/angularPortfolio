import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, ViewChild, ElementRef } from '@angular/core';
import { SkillsMetadata } from 'src/app/Interfaces/ComponentsMetadata';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, OnChanges {

  @Input() private content?: SkillsMetadata;
  @Input() private contentKeys?: number;
  @Input() private carouselIndex?: number;
  @Output() private onContentIndexChange = new EventEmitter();
  @ViewChild('slidesContainer', { static: true }) private slidesContainer?: ElementRef;

  private translateValue: string = '0px';
  constructor() { }

  ngOnInit() {
    console.log(this.content, this.carouselIndex);
  }

  displayCurrentContent(indexQuantifier: number, slide?: boolean) {
    this.carouselIndex = this.carouselIndex! + indexQuantifier;
    this.onContentIndexChange.emit(this.carouselIndex);
    this.sliiiide();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.carouselIndex) this.carouselIndex = changes.carouselIndex.currentValue; this.sliiiide();
  }

  sliiiide() {
    console.log(this.carouselIndex)
    this.carouselIndex === 4 ? 0 : this.carouselIndex;
    console.log(this.carouselIndex)

    this.translateValue = `${-(this.slidesContainer!.nativeElement.getBoundingClientRect().width * this.carouselIndex!)}px`;
  }
}
