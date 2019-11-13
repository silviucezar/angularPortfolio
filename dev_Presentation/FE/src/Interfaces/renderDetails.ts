export interface RenderDetails {
    os?: string,
    architecture?: string,
    orientation?: string,
    device?: string,
    browser?: string,
    browserVersion?: string,
    isMobile?: boolean,
    windowDetails?: windowDetails
}

interface windowDetails {
    width: string,
    height: string,
    aspectRatio: string
}

