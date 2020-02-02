import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobsComponent } from './jobs.component';
import { CarouselModule } from '../../shared/carousel/carousel.module';

@NgModule({
  declarations: [JobsComponent],
  exports:[CarouselModule],
  imports: [
    CommonModule,
    CarouselModule
  ],
})
export class JobsModule { }
