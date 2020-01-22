import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';
import { Lang, ComponentsMetadata } from 'src/app/Interfaces/ComponentsMetadata';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  private currentLocale!: keyof Lang;
  private metadata: Lang = { ro_RO: undefined, en_US: undefined }
  private loading: Boolean = true;

  constructor(
    private dataService: DataService
  ) {
    this.dataService.getRoutesMetadata().subscribe((componentsMetadata: ComponentsMetadata) => {
      this.loading = false;
      this.currentLocale = componentsMetadata.currentLocale as 'ro_RO' | 'en_US';
      this.metadata[this.currentLocale] = componentsMetadata.components.education[this.currentLocale];
      console.log(this.metadata[this.currentLocale])
    });
  }
  ngOnInit() {
  }

}
