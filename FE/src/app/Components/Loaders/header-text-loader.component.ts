import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-text-loader',
  template: `<div class='rectLoading'></div>`,
  styles: [`
  .rectLoading {
    background: linear-gradient(90deg,
      deepskyblue,
      transparent 50%,
      transparent 55%,
      deepskyblue 60%,
      transparent 60%,
      deepskyblue 60%);
      border-radius: 30px;
      animation    : slide 20s linear infinite;
      position: relative;
      width: 100%;
      height:100%
  }

  @keyframes slide {
    0% {
      background-position: -1500px 0;
    }

    100% {
      background-position: 1500px 0;
    }
  }
  `]
})
export class HeaderTextLoaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
