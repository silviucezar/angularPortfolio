import { Injectable, ElementRef } from '@angular/core';
import { Canvas } from '../Classes/canvasObject';
import { NavBarCanvasProps, HeaderCanvasProps } from '../Interfaces/CanvasDetails';

interface CanvasObject {
  NavBar: NavBarCanvasProps;
  Header: HeaderCanvasProps;
}
@Injectable({
  providedIn: 'root'
})
export class CanvasService {

  private canvasObj = new Canvas();
  private initialHeaderCanvasSetup = false;
  constructor() {
    this.canvasObj.NavBar.functionality.drawMenuCanvas = () => {
      if (this.canvasObj.NavBar.settings.pointsConfig.length === 0) this.setNavBarSettings();
      this.drawMenuSelection(this.canvasObj.NavBar.ctx, this.canvasObj.NavBar.settings.currentIndex, this.canvasObj.NavBar.settings.previousIndex);
    };
    this.canvasObj.Header.functionality.drawInitialCanvas = () => {
      console.log('header animation draw')
    };
  }

  setCanvas(canvasPropertyName: string, canvas: ElementRef, currentUrlName?: string) {
    console.log(canvasPropertyName)
    if (this.canvasObj[canvasPropertyName].element === null) this.canvasObj[canvasPropertyName].element = canvas.nativeElement;

    if (this.canvasObj[canvasPropertyName].ctx === null) this.canvasObj[canvasPropertyName].ctx = canvas.nativeElement.getContext('2d');
    if (currentUrlName) {
      this.canvasObj.NavBar.settings.previousIndex = this.canvasObj.NavBar.settings.currentIndex;
      this.canvasObj.NavBar.settings.currentIndex = ['AboutMe', 'Skills', 'WorkExperience', 'Education', 'References', 'LeaveMessage'].indexOf(currentUrlName)
      this.canvasObj[canvasPropertyName].functionality.drawMenuCanvas();
    } else {
      console.log('her')
      this.canvasObj[canvasPropertyName].functionality.drawInitialCanvas();
    }
  }

  setNavBarSettings() {
    this.canvasObj.NavBar.settings.heightRef = document.querySelector('.Categories_Url').getBoundingClientRect().height;
    this.canvasObj.NavBar.settings.pointsConfig = [];
    for (let i = 1; i <= 6; i++) {
      const CURRENT_TOP_REF = Math.floor((this.canvasObj.NavBar.settings.heightRef * i) - this.canvasObj.NavBar.settings.heightRef + (this.canvasObj.NavBar.settings.heightRef * 0.25));
      const CURRENT_BOT_REF = Math.floor((this.canvasObj.NavBar.settings.heightRef * i) - this.canvasObj.NavBar.settings.heightRef + (this.canvasObj.NavBar.settings.heightRef * 0.75));
      this.canvasObj.NavBar.settings.pointsConfig.push([
        [Math.floor(this.canvasObj.NavBar.width * (i % 2 === 0 ? 0.8 : 0.2)), Math.floor(this.canvasObj.NavBar.width * (i % 2 === 0 ? 0.2 : 0.8)), CURRENT_TOP_REF],
        [CURRENT_TOP_REF, CURRENT_BOT_REF, Math.floor(this.canvasObj.NavBar.width * (i % 2 === 0 ? 0.2 : 0.8))],
        [Math.floor(this.canvasObj.NavBar.width * (i % 2 === 0 ? 0.2 : 0.8)), Math.floor(this.canvasObj.NavBar.width * (i % 2 === 0 ? 0.8 : 0.2)), CURRENT_BOT_REF]
      ]);
    }
  }

  drawMenuSelection(ctx: CanvasRenderingContext2D, currentMenuIndex: number, previousMenuIndex?: number) {
    const CURRENT_DRAW_PATH: number[][] = this.canvasObj.NavBar.settings.pointsConfig[currentMenuIndex];
    const PREVIOUS_DRAW_PATH: number[][] = previousMenuIndex ? this.canvasObj.NavBar.settings.pointsConfig[previousMenuIndex] : null;
    let currentXCoord = CURRENT_DRAW_PATH[0][0];
    let currentYCoord = CURRENT_DRAW_PATH[0][2];
    let previousXCoord = previousMenuIndex !== null ? this.canvasObj.NavBar.settings.pointsConfig[previousMenuIndex][0][0] : null;
    let previousYCoord = previousMenuIndex !== null ? this.canvasObj.NavBar.settings.pointsConfig[previousMenuIndex][0][2] : null;
    ctx.strokeStyle = "powderblue";
    (function drawTop() {
      if (currentMenuIndex % 2 !== 0 ? currentXCoord <= CURRENT_DRAW_PATH[0][1] + 2 : currentXCoord >= CURRENT_DRAW_PATH[0][1]) {
        (function drawMiddle() {
          if (currentYCoord - 14 >= CURRENT_DRAW_PATH[1][1]) {
            (function drawBottom() {
              if (currentMenuIndex % 2 !== 0 ? currentXCoord >= CURRENT_DRAW_PATH[2][1] : currentXCoord <= CURRENT_DRAW_PATH[2][1]) {
                return;
              } else {
                window.requestAnimationFrame(drawBottom);
                ctx.beginPath();
                ctx.clearRect(previousXCoord - 15, previousYCoord - 5, 30, 15);
                ctx.moveTo(currentXCoord + 1, currentYCoord);
                previousXCoord += currentMenuIndex % 2 !== 0 ? -14 : 14;
                currentXCoord += currentMenuIndex % 2 !== 0 ? 14 : -14;
                ctx.lineTo(currentXCoord + 1, currentYCoord);
                ctx.stroke();
                ctx.closePath();
              };
            })();
            return;
          } else {
            window.requestAnimationFrame(drawTop);
            ctx.beginPath();
            ctx.clearRect(previousXCoord + (currentMenuIndex % 2 !== 0 ? -1 : 0), previousYCoord - 5, 15, 15);
            ctx.moveTo(currentXCoord + (currentMenuIndex % 2 !== 0 ? 1 : 0), currentYCoord);
            previousYCoord += 14;
            currentYCoord += 14;
            ctx.lineTo(currentXCoord + (currentMenuIndex % 2 !== 0 ? 1 : 0), currentYCoord);
            ctx.stroke();
            ctx.closePath();
          }
        })();
      } else {
        window.requestAnimationFrame(drawTop);
        ctx.beginPath();
        ctx.clearRect(previousXCoord, previousYCoord - 5, 15, 15);
        ctx.moveTo(currentXCoord, currentYCoord);
        previousXCoord += currentMenuIndex % 2 !== 0 ? 14 : -14;
        currentXCoord += currentMenuIndex % 2 !== 0 ? -14 : 14;
        ctx.lineTo(currentXCoord, currentYCoord);
        ctx.stroke();
        ctx.closePath();
      }
    })();
  }

  getCanvas(): CanvasObject {
    return this.canvasObj;
  }
}
