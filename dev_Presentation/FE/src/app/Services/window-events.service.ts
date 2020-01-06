import { Injectable } from '@angular/core';
import { CanvasService } from './canvas.service';
@Injectable({
  providedIn: 'root'
})
export class WindowEventsService {

  private canvasObj = {};
  constructor(private canvasService: CanvasService) { }

  setScrollEvent() {
    console.clear();
    this.canvasService.getCanvas().subscribe(canvasObj => this.canvasObj = canvasObj);
    window.onwheel = e => {
      console.clear();
      console.log('Scroll Event:', this.canvasObj, e);
    }
    console.log('Scroll event set');
  }

  setResizeEvent() {
    console.log('Resize Event', window);
  }
}
