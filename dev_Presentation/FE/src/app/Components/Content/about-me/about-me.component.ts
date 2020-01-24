import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';
import { Lang, ComponentsMetadata } from 'src/app/Interfaces/ComponentsMetadata';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']

})
export class AboutMeComponent implements OnInit, AfterViewInit {
  title = 'FE';

  private locale!: keyof Lang;
  private metadata: Lang = { ro_RO: undefined, en_US: undefined }
  private finishedLoading: Boolean = false;

  constructor(
    private dataService: DataService
  ) {
    this.dataService.getRoutesMetadata().subscribe((componentsMetadata: ComponentsMetadata) => {
      this.finishedLoading = true;
      this.locale = componentsMetadata.currentLocale as 'ro_RO' | 'en_US';
      this.metadata[this.locale] = componentsMetadata.components.about_me[this.locale];
    });
  }

  ngOnInit() { }

  ngAfterViewInit() { }
}
