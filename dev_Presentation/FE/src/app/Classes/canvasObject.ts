interface NavBarCanvasProps {
  element: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  settings: NavBarCanvasSettings;
  width: number;
  height: number;
  functionality: NavBarCanvasFunctionality;
}

interface NavBarCanvasSettings {
  previousIndex: number;
  currentIndex: number;
  heightRef: number;
  pointsConfig: number[][][][]
}

interface NavBarCanvasFunctionality {
  drawMenuCanvas: () => void;
}

interface HeaderCanvasProps {
  element: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  settings: HeaderCanvasSettings;
  functionality: HeaderCanvasFunctionality;
}

interface HeaderCanvasSettings {
  previousIndex: number;
  currentIndex: number
}

interface HeaderCanvasFunctionality {
  drawInitialCanvas: () => void;
}


export class Canvas {
  public NavBar: NavBarCanvasProps;
  public Header: HeaderCanvasProps;
  constructor() {
    this.NavBar = {
      element: null,
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