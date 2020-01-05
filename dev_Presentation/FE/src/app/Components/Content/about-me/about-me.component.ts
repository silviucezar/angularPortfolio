import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
  host: { 'class': "App_Global_Content" }
})
export class AboutMeComponent implements OnInit, AfterViewInit {
  title = 'FE';

  constructor() { }

  ngOnInit() { }

  ngAfterViewInit() { }

}
