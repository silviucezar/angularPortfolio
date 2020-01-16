import { NavBarCanvasProps, HeaderCanvasProps } from '../Interfaces/CanvasDetails';
export class Canvas {
  public NavBar: NavBarCanvasProps;
  public Header: HeaderCanvasProps;
  constructor() {
    this.NavBar = {
      element: HTMLCanvasElement,
      ctx: null,
      settings: {
        previousIndex: null,
        currentIndex: null,
        heightRef: null,
        pointsConfig: []
      },
      width: null,
      height: null,
      functionality: {
        drawMenuCanvas: null
      }
    };
    this.Header = {
      element: null,
      ctx: null,
      settings: {
        previousIndex: null,
        currentIndex: null
      },
      functionality: {
        drawInitialCanvas: null
      }
    };
  }
}