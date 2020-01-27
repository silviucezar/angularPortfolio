import { Component, OnInit } from '@angular/core';
import { Lang, ComponentsMetadata } from 'src/app/Interfaces/ComponentsMetadata';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-leave-message',
  templateUrl: './leave-message.component.html',
  styleUrls: ['./leave-message.component.scss']
})
export class LeaveMessageComponent implements OnInit {

  private currentLocale!: keyof Lang;
  private metadata: Lang = { ro_RO: undefined, en_US: undefined }
  private loading: Boolean = true;

  constructor(
    private dataService: DataService
  ) {
    this.dataService.getRoutesMetadata().subscribe((componentsMetadata: ComponentsMetadata) => {
      this.loading = false;
      this.currentLocale = componentsMetadata.currentLocale as 'ro_RO' | 'en_US';
      this.metadata[this.currentLocale] = componentsMetadata.components.leave_message[this.currentLocale];
    });
  }
  ngOnInit() {
  }

}
