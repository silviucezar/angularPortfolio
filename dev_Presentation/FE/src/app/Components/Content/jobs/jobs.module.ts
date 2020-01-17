import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobsComponent } from './jobs.component';

@NgModule({
  declarations: [JobsComponent],
  entryComponents: [JobsComponent],
  imports: [
    CommonModule
  ]
})
export class JobsModule { }
