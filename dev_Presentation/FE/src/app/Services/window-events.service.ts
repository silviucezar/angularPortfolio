import { Injectable, ElementRef } from '@angular/core';
import { CanvasService } from './canvas.service';
import { CanvasProps } from '../Interfaces/CanvasDetails';
import { Meta } from '@angular/platform-browser';
import { BehaviorSubject } from 'rxjs';

interface InitialSetup {
  urlSubscription: BehaviorSubject<string>;
  NavBarCanvas: CanvasSetup;
  HeaderCanvas: CanvasSetup;
}

interface CanvasSetup {
  name: string;
  canvas: ElementRef
}
@Injectable({
  providedIn: 'root'
})
export class WindowEventsService {

  private canvasObj: CanvasProps;
  private currentYScrollRef: number;
  constructor(
    private canvasService: CanvasService,
    private metaService: Meta
  ) { }

  init(initialSetup: InitialSetup) {
    initialSetup.urlSubscription.subscribe(url => { if (url) this.canvasService.setCanvas('NavBar', initialSetup.NavBarCanvas.canvas, url); })
    this.canvasService.setCanvas('Header', initialSetup.HeaderCanvas.canvas)
    this.setScrollEvent();
    this.setResizeEvent();
    this.attachOrientationChangeEvent();
  }

  setScrollEvent() {
    this.canvasService.getCanvas().subscribe(canvasObj => {
      this.canvasObj = canvasObj;
      this.currentYScrollRef = this.canvasObj.NavBar.settings.currentIndex * this.canvasObj.NavBar.settings.heightRef
    });
    window.onwheel = e => {
      console.log('Scroll Event:', this.currentYScrollRef);
      this.canvasObj.NavBar.ctx.beginPath();
      this.canvasObj.NavBar.ctx.rect(this.canvasObj.NavBar.width * 0.98, this.currentYScrollRef, this.canvasObj.NavBar.width * 0.02, this.canvasObj.NavBar.settings.heightRef);
      this.canvasObj.NavBar.ctx.stroke();
      this.canvasObj.NavBar.ctx.closePath();
    }
    console.log('Scroll event set');
  }

  setResizeEvent() {
    console.log('Resize Event', window);
  }

  attachOrientationChangeEvent() {
    const SIZE_REF_ONE = window.outerHeight;
    const SIZE_REF_TWO = window.outerWidth

    if (window.onorientationchange === null) {
      console.log(screen.orientation.type)
      console.log(`width=${Boolean(screen.orientation.type.match('portrait')) ? SIZE_REF_TWO : SIZE_REF_ONE},height=${screen.orientation.type.match('portrait') ? SIZE_REF_ONE : SIZE_REF_TWO}, initial-scale=1.0`)
      if (this.metaService.getTag('name="viewport"').content === 'width=device-width, initial-scale=1') {
        this.metaService.updateTag({
          name: 'viewport',
          content: `width=${Boolean(screen.orientation.type.match('portrait')) ? SIZE_REF_TWO : SIZE_REF_ONE},height=${screen.orientation.type.match('portrait') ? SIZE_REF_ONE : SIZE_REF_TWO}, initial-scale=1.0`
        });
      }
      window.onorientationchange = (e) => {
        console.log(screen.orientation.type)
        console.log(`width=${Boolean(screen.orientation.type.match('portrait')) ? SIZE_REF_TWO : SIZE_REF_ONE},height=${screen.orientation.type.match('portrait') ? SIZE_REF_ONE : SIZE_REF_TWO}, initial-scale=1.0`
        )
        this.metaService.updateTag({
          name: 'viewport',
          content: `width=${Boolean(screen.orientation.type.match('portrait')) ? SIZE_REF_TWO : SIZE_REF_ONE},height=${screen.orientation.type.match('portrait') ? SIZE_REF_ONE : SIZE_REF_TWO}, initial-scale=1.0`
        });
      }
    }
  }
}
