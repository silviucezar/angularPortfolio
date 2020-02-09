import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { InitService } from 'src/app/Services/init.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})

export class CarouselComponent implements OnInit {

  constructor(
    private initService:InitService
  ) { }

  ngOnInit() { }

  triggerSlides(indexQuantifier: number) {
    this.initService.displaySlidesContent(indexQuantifier);
  }
}
