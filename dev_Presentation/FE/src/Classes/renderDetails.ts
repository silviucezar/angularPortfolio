
// export interface RenderDetails {
//     orientation?: string,
//     device?: string,
//     browser?: string,
//     browserVersion?: string,
//     isMobile?: boolean,
//     windowDetails?: windowDetails
// }

// interface windowDetails {
//     width: string,
//     height: string,
//     aspectRatio: string
// }

export class RenderDetails {
    private readonly browser:object = {
            name : navigator.userAgent.match(/edge/i) ? navigator.userAgent.match(/edge/i) : navigator.userAgent.match(/firefox|chrome|opera|safari/i).toString(),
            version : navigator.userAgent.replace(navigator.userAgent.substring(0,(navigator.userAgent.match(/edge/i) ? navigator.userAgent.search(/edge/i) : navigator.userAgent.search(/firefox|chrome|edge|opera|safari/i))),"").match(/([0-9]+\.?)+/)[0]
        };
        private readonly device:string = navigator.userAgent.match(/android|i(phone|pad)|windows/i)[0] ;
        private readonly isMobile:boolean = this.device.match(/android|i(phone|pad)/i) ? true : false;
        private windowDetail:object = {
            width : window.innerWidth,
            height : window.innerHeight,
            aspectRatio : window.innerWidth / window.innerHeight,
            orientation : null
        }
    }


// class  WindowDetails {
//     constructor() {

//     }
//     width: string,
//     height: string,
//     aspectRatio: string
