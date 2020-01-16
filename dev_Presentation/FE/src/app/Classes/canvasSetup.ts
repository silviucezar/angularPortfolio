import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common'
import { NavBarCanvasProps, HeaderCanvasProps } from '../Interfaces/CanvasDetails';

export class CanvasSetup {
  public NavBar: NavBarCanvasProps;
  public Header: HeaderCanvasProps;
  
  constructor(
    private _document: Document
  ) {

    this.NavBar = {
      element: this._document.querySelector("#headerCanvas") as HTMLCanvasElement,
      ctx: (this._document.querySelector("#headerCanvas") as HTMLCanvasElement).getContext('2d') as CanvasRenderingContext2D,
      settings: {
        previousIndex: '',
        currentIndex: '',
        heightRef: '',
        pointsConfig: []
      },
      width: '',
      height: '',
      functionality: {
        drawMenuCanvas: () => void {}
      }
    };
    this.Header = {
      element: this._document.querySelector("#headerCanvas") as HTMLCanvasElement,
      ctx: (this._document.querySelector("#headerCanvas") as HTMLCanvasElement).getContext('2d') as CanvasRenderingContext2D,
      functionality: {
        drawInitialCanvas: () => void {}
      }
    };
  }
}