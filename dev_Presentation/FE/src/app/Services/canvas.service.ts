import { Injectable, ElementRef } from '@angular/core';
import { Canvas } from '../Classes/canvasObject';
import { BehaviorSubject } from 'rxjs';

interface CanvasObject {
  NavBar: {};
  Header: {};
}
@Injectable({
  providedIn: 'root'
})
export class CanvasService {

  private canvasObj = new Canvas();
  private canvasBehaviorSubject$ = new BehaviorSubject<CanvasObject>(this.canvasObj);
  constructor() {
    this.canvasObj.NavBar.functionality.drawMenuCanvas = () => {
      if (this.canvasObj.NavBar.settings.pointsConfig.length === 0) this.setNavBarSettings();
      if (this.canvasObj.NavBar.settings.previousIndex !== null) this.deletePreviousMenuSelection(this.canvasObj.NavBar.ctx, this.canvasObj.NavBar.settings.previousIndex);
      this.drawCurrentMenuSelection(this.canvasObj.NavBar.ctx, this.canvasObj.NavBar.settings.currentIndex);
    };
    this.canvasObj.Header.functionality.drawInitialCanvas = () => {
      console.log('header animation draw')
    };
  }

  setCanvas(canvasPropertyName: string, canvas: ElementRef, currentUrlName?: string) {
    if (this.canvasObj[canvasPropertyName].element === null) this.canvasObj[canvasPropertyName].element = canvas.nativeElement;
    if (this.canvasObj[canvasPropertyName].ctx === null) this.canvasObj[canvasPropertyName].ctx = canvas.nativeElement.getContext('2d');
    if (currentUrlName) {
      this.canvasObj.NavBar.settings.previousIndex = this.canvasObj.NavBar.settings.currentIndex;
      this.canvasObj.NavBar.settings.currentIndex = ['AboutMe', 'Skills', 'WorkExperience', 'Education', 'References', 'LeaveMessage'].indexOf(currentUrlName)
      this.canvasObj[canvasPropertyName].functionality.drawMenuCanvas();
    } else {
      this.canvasObj[canvasPropertyName].functionality.drawInitialCanvas();
    }
    this.canvasBehaviorSubject$.next(this.canvasObj);
  }

  setNavBarSettings() {
    this.canvasObj.NavBar.settings.heightRef = document.querySelector('.Categories_Url').getBoundingClientRect().height;
    this.canvasObj.NavBar.width = this.canvasObj.NavBar.element.width = this.canvasObj.NavBar.element.getBoundingClientRect().width;
    this.canvasObj.NavBar.height = this.canvasObj.NavBar.element.height = this.canvasObj.NavBar.element.getBoundingClientRect().height;
    this.canvasObj.NavBar.settings.pointsConfig = [];
    for (let i = 1; i <= 6; i++) {
      const CURRENT_TOP_REF = Math.floor((this.canvasObj.NavBar.settings.heightRef * i) - this.canvasObj.NavBar.settings.heightRef + (this.canvasObj.NavBar.settings.heightRef * 0.25));
      const CURRENT_BOT_REF = Math.floor((this.canvasObj.NavBar.settings.heightRef * i) - this.canvasObj.NavBar.settings.heightRef + (this.canvasObj.NavBar.settings.heightRef * 0.85));
      this.canvasObj.NavBar.settings.pointsConfig.push([
        [
          [Math.floor(this.canvasObj.NavBar.width * (i % 2 === 0 ? 0.2 : 0.8)), CURRENT_TOP_REF],
          [Math.floor(this.canvasObj.NavBar.width * (i % 2 === 0 ? 0.8 : 0.2)), CURRENT_TOP_REF]
        ],
        [
          [Math.floor(this.canvasObj.NavBar.width * (i % 2 === 0 ? 0.8 : 0.2)), CURRENT_BOT_REF],
          [Math.floor(this.canvasObj.NavBar.width * (i % 2 === 0 ? 0.2 : 0.8)), CURRENT_BOT_REF]
        ]
      ]);
    }
  }

  deletePreviousMenuSelection(ctx: CanvasRenderingContext2D, previousMenuIndex) {
    const DRAW_PATH = this.canvasObj.NavBar.settings.pointsConfig[previousMenuIndex];
    let currentXCoord = DRAW_PATH[0][0][0];
    let currentYCoord = DRAW_PATH[0][0][1];
    let intervalOne = setInterval(() => {
      if (previousMenuIndex % 2 !== 0 ? currentXCoord >= DRAW_PATH[0][1][0] : currentXCoord <= DRAW_PATH[0][1][0]) {
        clearInterval(intervalOne);
        let intervalTwo = setInterval(() => {
          if (currentYCoord >= DRAW_PATH[1][0][1]) {
            clearInterval(intervalTwo)
            let intervalThree = setInterval(() => {
              if (previousMenuIndex % 2 !== 0 ? currentXCoord + 14 <= DRAW_PATH[1][1][0] : currentXCoord >= DRAW_PATH[1][1][0]) {
                clearInterval(intervalThree);
                return;
              }
              ctx.clearRect(currentXCoord, currentYCoord - 9, 14, 10)
              currentXCoord = currentXCoord + (previousMenuIndex % 2 !== 0 ? -14 : 14);
              ctx.closePath();
            })
          } else {
            ctx.clearRect(currentXCoord + (previousMenuIndex % 2 !== 0 ? -14 : 0), currentYCoord - 14, 14, 10)
            currentYCoord = currentYCoord + 5;
            ctx.stroke();
          };
        });
      } else {
        ctx.clearRect(currentXCoord, currentYCoord - 7, 14, 10)
        currentXCoord = currentXCoord + (previousMenuIndex % 2 !== 0 ? 14 : -14);
      }
    });
  }

  drawCurrentMenuSelection(ctx: CanvasRenderingContext2D, currentMenuIndex: number) {
    console.log(ctx)
    const DRAW_PATH = this.canvasObj.NavBar.settings.pointsConfig[currentMenuIndex];
    let currentXCoord = DRAW_PATH[0][0][0];
    let currentYCoord = DRAW_PATH[0][0][1];
    ctx.beginPath();
    ctx.strokeStyle = "powderblue";
    let intervalOne = setInterval(() => {
      if (currentMenuIndex % 2 !== 0 ? currentXCoord >= DRAW_PATH[0][1][0] : currentXCoord <= DRAW_PATH[0][1][0]) {
        clearInterval(intervalOne);
        let intervalTwo = setInterval(() => {
          if (currentYCoord >= DRAW_PATH[1][0][1]) {
            clearInterval(intervalTwo)
            let intervalThree = setInterval(() => {
              if (currentMenuIndex % 2 !== 0 ? currentXCoord <= DRAW_PATH[1][1][0] : currentXCoord >= DRAW_PATH[1][1][0]) {
                clearInterval(intervalThree);
                return;
              }
              ctx.moveTo(currentXCoord, currentYCoord - 1);
              currentXCoord = currentXCoord + (currentMenuIndex % 2 !== 0 ? -14 : 14);
              ctx.lineTo(currentXCoord, currentYCoord - 1);
              ctx.stroke();
              ctx.closePath();
            })
          } else {
            ctx.moveTo(currentXCoord + (currentMenuIndex % 2 !== 0 ? -1 : 1), currentYCoord);
            currentYCoord = currentYCoord + 5;
            ctx.lineTo(currentXCoord + (currentMenuIndex % 2 !== 0 ? -1 : 1), currentYCoord);
            ctx.stroke();
          };
        });
      } else {
        ctx.moveTo(currentXCoord, currentYCoord);
        currentXCoord = currentXCoord + (currentMenuIndex % 2 !== 0 ? 14 : -14);
        ctx.lineTo(currentXCoord, currentYCoord);
        ctx.stroke();
      }
    });
  }

  getCanvas(): BehaviorSubject<CanvasObject> {
    return this.canvasBehaviorSubject$;
  }
}
