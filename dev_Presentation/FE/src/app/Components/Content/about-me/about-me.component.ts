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

  private currentLocale!: keyof Lang;
  private metadata: Lang = { ro_RO: undefined, en_US: undefined }
  private loading: Boolean = true;

  constructor(
    private dataService: DataService
  ) {
    this.dataService.getRoutesMetadata().subscribe((componentsMetadata: ComponentsMetadata) => {
      this.loading = false;
      this.currentLocale = componentsMetadata.currentLocale as 'ro_RO' | 'en_US';
      this.metadata[this.currentLocale] = componentsMetadata.components.about_me[this.currentLocale];
    });
  }

  ngOnInit() { }

  ngAfterViewInit() { }
}
