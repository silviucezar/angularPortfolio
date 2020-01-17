import { NavBarCanvasProps, HeaderCanvasProps } from '../Interfaces/CanvasDetails';

export class CanvasSetup {
  public navBar: NavBarCanvasProps;
  public header: HeaderCanvasProps;

  constructor(
    private navBarCanvas: HTMLCanvasElement,
    private headerCanvas: HTMLCanvasElement
  ) {

    this.navBar = {
      element: this.navBarCanvas,
      ctx: this.navBarCanvas.getContext('2d') as CanvasRenderingContext2D,
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
    this.header = {
      element: this.headerCanvas,
      ctx: this.headerCanvas.getContext('2d') as CanvasRenderingContext2D,
      functionality: {
        drawInitialCanvas: () => void {}
      }
    };
  }
}