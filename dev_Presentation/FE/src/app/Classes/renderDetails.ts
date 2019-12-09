export interface windowDetails {
    Width: number,
    Height: number,
    AspectRatio: number,
    getDeviceOrientation: () => string;
}

export class RenderDetails {
    public readonly Browser: object = {
        Name: navigator.userAgent.match(/edge/i) ? navigator.userAgent.match(/edge/i) : navigator.userAgent.match(/firefox|chrome|opera|safari/i).toString(),
        Version: navigator.userAgent.replace(navigator.userAgent.substring(0, (navigator.userAgent.match(/edge/i) ? navigator.userAgent.search(/edge/i) : navigator.userAgent.search(/firefox|chrome|edge|opera|safari/i))), "").match(/([0-9]+\.?)+/)[0]
    };
    public readonly Device: string = navigator.userAgent.match(/android|i(phone|pad)|windows/i)[0];
    public readonly IsMobile: boolean = (() => {
        if (navigator.maxTouchPoints === 0) return false;
        this.Device.match(/android|i(phone|pad)/i) ? true : false;
    })();
    public WindowDetails: windowDetails = {
        Width: window.innerWidth,
        Height: window.innerHeight,
        AspectRatio: window.innerWidth / window.innerHeight,
        getDeviceOrientation: (): string => {
            switch (true) {
                case window.innerWidth > window.innerHeight && window.innerWidth / window.innerHeight > 1.4:
                    console.log("Landscape");
                    return "Landscape";
                case ~~(window.innerWidth / window.innerHeight) === 1:
                    console.log("Square");
                    return "Square";
                case window.innerWidth < window.innerHeight:
                    console.log("Portrait");
                    return "Portrait";
            }
        }
    }
}