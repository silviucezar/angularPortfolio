import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';
import { ComponentsMetadata, Lang } from 'src/app/Interfaces/ComponentsMetadata';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  private currentLocale!: keyof Lang;
  private metadata: Lang = { ro_RO: undefined, en_US: undefined }
  private loading: Boolean = true;

  constructor(
    private dataService: DataService
  ) {
    this.dataService.getRoutesMetadata().subscribe((componentsMetadata: ComponentsMetadata) => {
      this.loading = false;
      this.currentLocale = componentsMetadata.currentLocale as 'ro_RO' | 'en_US';
      this.metadata[this.currentLocale] = componentsMetadata.components.skills[this.currentLocale];
      console.log(this.metadata[this.currentLocale])
    });
  }

  ngOnInit() { }

}
