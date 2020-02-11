import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaveMessageComponent } from './leave-message.component';
import { FormsModule }   from '@angular/forms';

@NgModule({
  declarations: [LeaveMessageComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class LeaveMessageModule { }
