import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-component-loader',
  template: '',
  styles: [
    `:host {
      position        : relative;
      width           : 100%;
      height          : 100%;
      top             : 0;
      left            : 0;
      background-size : cover;
      animation: 1s rotate linear infinite
    }

    @keyframes rotate {
      from {
        transform:rotate(0deg);
      }

      to {
        transform:rotate(360deg);
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
