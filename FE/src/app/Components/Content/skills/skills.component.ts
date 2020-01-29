import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';
import { ComponentsMetadata, Lang } from 'src/app/Interfaces/ComponentsMetadata';
import { PageLogic } from 'src/app/Services/page.logic.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent extends PageLogic implements OnInit {

  private locale!: keyof Lang;
  private metadata: Lang = { ro_RO: undefined, en_US: undefined }
  private finishedLoading: Boolean = false;
  private skills: string[] = [];
  private isExpanded: boolean = false;

  constructor(
    private dataService: DataService
  ) {
    super();
    this.dataService.getRoutesMetadata().subscribe((componentsMetadata: ComponentsMetadata) => {
      this.finishedLoading = true;
      this.locale = componentsMetadata.currentLocale as 'ro_RO' | 'en_US';
      this.metadata[this.locale] = componentsMetadata.components.skills[this.locale];
      if (this.skills = []) this.skills = this.objectKeys(this.metadata[this.locale]);
    });
  }

  ngOnInit() { }

  toggleInfoContainer() {
    this.isExpanded = !this.isExpanded;
  }

}
