import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-component-loader',
  template:
    `<div class='appGlobalContentLoader'>
      <div class="appGlobalContentLoaderAnimation"></div>
    </div>`,
  styles: [
    `.appGlobalContentLoader {
        display: block;
        width  : 100%;
        height : 10.4vh;
        padding: 4px
      }

    .appGlobalContentLoaderAnimation {
        width        : 100%;
        height       : 100%;
        animation    : 1.5s pulsate infinite ease-in-out;
        border-radius: 5px;
    }

    @keyframes pulsate {
      0% {
        background: transparent;
      }

      50% {
        background: lightblue;
      }

      100% {
        background: transparent;
      }
    }
    `
  ]
})
export class DynamicComponentLoaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
