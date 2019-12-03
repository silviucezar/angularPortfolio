import { Component, OnInit, AfterViewInit, Input, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
  host: { 'class': "App_Global_Content" }
})
export class AboutMeComponent implements OnInit, AfterViewInit {
  title = 'FE';

  constructor(private activeRoute: ActivatedRoute, element: ElementRef) { }

  ngOnInit() {
    console.log("about me", this.activeRoute.snapshot)
  }




  ngAfterViewInit() { }

}
