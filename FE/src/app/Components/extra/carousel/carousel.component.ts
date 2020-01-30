import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { SkillsMetadata } from 'src/app/Interfaces/ComponentsMetadata';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, OnChanges {

  @Input() private content?: SkillsMetadata;
  @Input() private carouselIndex?: number;
  @Output() private onSkillIndexChange = new EventEmitter();
  @ViewChild('slidesContainer', { static: true }) private slidesContainer?: HTMLDivElement;

  private translateValue: string = '0px';
  constructor() { }

  ngOnInit() {
    console.log(this.content, this.carouselIndex);
  }

  displayCurrentSkill(indexQuantifier: number, slide?: boolean) {
    this.carouselIndex = this.carouselIndex! + indexQuantifier;
    this.onSkillIndexChange.emit(this.carouselIndex);
    this.sliiiide();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.carouselIndex) this.carouselIndex = changes.carouselIndex.currentValue; this.sliiiide();
  }

  sliiiide() {
    this.translateValue = `${-(this.slidesContainer!.getBoundingClientRect().width * this.carouselIndex!)}px`;
  }
}
