import { Component, OnInit, Input } from '@angular/core';
import { SkillsMetadata } from 'src/app/Interfaces/ComponentsMetadata';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  @Input() private content?: SkillsMetadata;
  @Input() private carouselIndex?: number;

  constructor() { }

  ngOnInit() {
    console.log(this.content, this.carouselIndex);
  }

}
