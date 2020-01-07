export interface CanvasProps {
    NavBar?: NavBarCanvasProps;
    Header?: HeaderCanvasProps;
}

export interface NavBarCanvasProps {
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
    pointsConfig: number[][][]
}

interface NavBarCanvasFunctionality {
    drawMenuCanvas: () => void;
}

export interface HeaderCanvasProps {
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