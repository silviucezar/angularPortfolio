import { Directive, ElementRef, Renderer2 } from '@Angular/core';

@Directive({ selector: "[App_Global_Header]" })
export class AppGlobalHeader {

    constructor(element: ElementRef, renderer: Renderer2) {

    }
}