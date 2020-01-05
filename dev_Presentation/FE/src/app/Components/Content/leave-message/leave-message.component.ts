import { Component, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-leave-message',
  templateUrl: './leave-message.component.html',
  styleUrls: ['./leave-message.component.scss']
})
export class LeaveMessageComponent implements OnInit {

  constructor( public viewContainerRef: ViewContainerRef) { }

  ngOnInit() {
  }

}
