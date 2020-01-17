import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']

})
export class AboutMeComponent implements OnInit, AfterViewInit {
  title = 'FE';

  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit() { }

}
