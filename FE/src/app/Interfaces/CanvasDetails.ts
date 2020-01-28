export interface CanvasSetup {
    background?: BackgroundCanvasProps;
    vision?: VisionCanvasProps;
}

export interface BackgroundCanvasProps {
    element: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D | undefined;
    settings: BackgroundCanvasSettings;
    width: number | string;
    height: number | string;
    functionality: BackgroundCanvasFunctionality;
}

interface BackgroundCanvasSettings {
    menuHighlight: MenuHighlightSettings;
    galaxy: GalaxySettings;
}

interface MenuHighlightSettings {
    previousIndex: number | string;
    currentIndex: number | string;
    heightRef: number | string;
    pointsConfig: number[][][];
}

interface GalaxySettings {
    top: GalaxySubSettings;
    bottom: GalaxySubSettings;
}

interface GalaxySubSettings {
    coords: number[][],
    speed: number;
}

interface BackgroundCanvasFunctionality {
    drawMenuCanvas: () => void;
}

export interface VisionCanvasProps {
    element: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D | undefined;
    functionality: VisionCanvasFunctionality;
}

interface VisionCanvasFunctionality {
    drawInitialCanvas: () => void;
}