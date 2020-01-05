  interface NavBarCanvasProps {
    element:HTMLCanvasElement;
    settings:NavBarCanvasSettings;
    width:number;
    height:number;
    functionality:NavBarCanvasFunctionality;
  }
  
  interface NavBarCanvasSettings {
    previousIndex:number;
    currentIndex:number;
    heightRef:number;
    pointsConfig:number[][][][]
  }

  interface NavBarCanvasFunctionality {
    drawMenuCanvas: ()=>void;
  }
  
  interface HeaderCanvasProps {
    element:HTMLCanvasElement;
    settings:HeaderCanvasSettings;
    functionality:HeaderCanvasFunctionality;
  }
  
  interface HeaderCanvasSettings {
    previousIndex:number;
    currentIndex:number
  }

  interface HeaderCanvasFunctionality {
    drawInitialCanvas: ()=>void;
  }
  

export class Canvas {
    public NavBar:NavBarCanvasProps;
    public Header:HeaderCanvasProps;
    constructor() {
        this.NavBar = {
            element: null,
            settings: {
                previousIndex:null,
                currentIndex:null,
                heightRef:null,
                pointsConfig:[]
            },
            width:null,
            height:null,
            functionality:{
              drawMenuCanvas:null
            }
        }
        this.Header = {
            element: null,
            settings: {
                previousIndex:null,
                currentIndex:null
            },
            functionality:{
                drawInitialCanvas:null
            }
        }
    }
}