import { Component, OnInit, AfterViewInit } from '@angular/core';
// import { DataService } from 'src/app/Services/data.service';
// import { Lang, ComponentsMetadata } from 'src/app/Interfaces/interfaces';
import { PageLogic } from 'src/app/Services/page.logic.service';
import { ComponentsTemplate, AboutMe } from 'src/app/Interfaces/interfaces';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']

})
export class AboutMeComponent implements OnInit, AfterViewInit {
  title = 'FE';

  private metadata: AboutMe | undefined = undefined;

  constructor(
    private pageLogic: PageLogic
  ) {
    this.pageLogic.fetchComponentsMetadata('about_me').then((metadata:AboutMe)=> this.metadata = metadata);
  }

  ngOnInit() { }

  ngAfterViewInit() { }
}
