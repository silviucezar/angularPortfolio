import { Component, OnInit, Input } from '@angular/core';
import { SkillsMetadata } from 'src/app/Interfaces/ComponentsMetadata';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  @Input() content?: SkillsMetadata;
  @Input() carouselIndex?: number;

  constructor() { }

  ngOnInit() {
    console.log(this.content, this.carouselIndex);
  }

}
