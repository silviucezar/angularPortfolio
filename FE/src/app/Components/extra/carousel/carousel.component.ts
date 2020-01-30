import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
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

  constructor() { }

  ngOnInit() {
    console.log(this.content, this.carouselIndex);
  }

  displayCurrentSkill(indexQuantifier: number, slide?: boolean) {
    this.carouselIndex = this.carouselIndex! + indexQuantifier;
    this.onSkillIndexChange.emit(this.carouselIndex);
    console.log(this.carouselIndex)
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes)
    // if (changes.carouselIndex) this.carouselIndex! = changes.carouselIndex as number;

  }
}
