import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

//Interfaces to expose relevant details needed to correctly render an element such device type/os/sizes

interface windowDetails {
  width: string,
  height: string,
  aspectRatio: string
}

interface renderDetails {
  os: string,
  orientation: string,
  device: string,
  browser: null,
  isMobile: null,
  windowDetails: windowDetails
}

export class RenderingService {

  constructor() { }
}
