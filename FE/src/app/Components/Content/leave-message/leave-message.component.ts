import { Component, OnInit } from '@angular/core';
import { Lang, ComponentsMetadata } from 'src/app/Interfaces/ComponentsMetadata';
import { DataService } from 'src/app/Services/data.service';
import { PageLogic } from 'src/app/Services/page.logic.service';

@Component({
  selector: 'app-leave-message',
  templateUrl: './leave-message.component.html',
  styleUrls: ['./leave-message.component.scss']
})
export class LeaveMessageComponent implements OnInit {

  private metadata!:ComponentsMetadata;
  constructor(
    private pageLogic: PageLogic
  ) {
    this.pageLogic.subscribeToComponentsMetadata('leave_message').subscribe((componentMetadata: ComponentsMetadata) => this.metadata = componentMetadata);

  }
  ngOnInit() { }
  
}
