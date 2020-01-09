import { Injectable } from '@angular/core';
import { CanvasService } from './canvas.service';
import { CanvasProps } from '../Interfaces/CanvasDetails';

@Injectable({
  providedIn: 'root'
})
export class WindowEventsService {

  private canvasObj: CanvasProps;
  private currentYScrollRef: number;
  constructor(
    private canvasService: CanvasService,

  ) { }

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
}
