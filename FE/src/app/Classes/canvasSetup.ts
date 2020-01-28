import { BackgroundCanvasProps, VisionCanvasProps } from '../Interfaces/CanvasDetails';

export class CanvasSetup {
  public background: BackgroundCanvasProps;
  public vision: VisionCanvasProps;

  constructor(
    private backgroundCanvas: HTMLCanvasElement,
    private visionCanvas: HTMLCanvasElement
  ) {

    this.background = {
      element: this.backgroundCanvas,
      ctx: undefined,
      settings: {
        menuHighlight: {
          previousIndex: '',
          currentIndex: '',
          heightRef: '',
          pointsConfig: []
        },
        galaxy: {
          top: {
            coords: [[0, 0]],
            speed: 0
          },
          bottom: {
            coords: [[0, 0]],
            speed: 0
          }
        }
      },
      width: '',
      height: '',
      functionality: {
        drawMenuCanvas: () => void {}
      }
    };
    this.vision = {
      element: this.visionCanvas,
      ctx: undefined,
      functionality: {
        drawInitialCanvas: () => void {}
      }
    };
  }
}