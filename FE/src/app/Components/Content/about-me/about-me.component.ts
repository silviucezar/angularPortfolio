import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';
import { Lang, ComponentsMetadata } from 'src/app/Interfaces/ComponentsMetadata';
import { PageLogic } from 'src/app/Services/page.logic.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']

})
export class AboutMeComponent implements OnInit, AfterViewInit {
  title = 'FE';

  private metadata!: ComponentsMetadata;

  constructor(
    private pageLogic: PageLogic
  ) {
    this.pageLogic.subscribeToComponentsMetadata('about_me').subscribe((componentMetadata: ComponentsMetadata) => { this.metadata = componentMetadata; console.log(this.metadata) });
  }

  ngOnInit() { }

  ngAfterViewInit() { }
}
