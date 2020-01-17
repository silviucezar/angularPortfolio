export interface CanvasSetup {
    NavBar?: NavBarCanvasProps;
    Header?: HeaderCanvasProps;
}

export interface NavBarCanvasProps {
    element: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    settings: NavBarCanvasSettings;
    width: number | string;
    height: number | string;
    functionality: NavBarCanvasFunctionality;
}

interface NavBarCanvasSettings {
    previousIndex: number | string;
    currentIndex: number | string;
    heightRef: number | string;
    pointsConfig: number[][][]
}

interface NavBarCanvasFunctionality {
    drawMenuCanvas: () => void;
}

export interface HeaderCanvasProps {
    element: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    functionality: HeaderCanvasFunctionality;
}

interface HeaderCanvasFunctionality {
    drawInitialCanvas: () => void;
}