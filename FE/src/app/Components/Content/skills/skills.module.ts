import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from './skills.component';
import { CarouselModule } from '../../shared/carousel/carousel.module';

@NgModule({
  declarations: [SkillsComponent],
  exports:[CarouselModule],
  imports: [
    CommonModule,
    CarouselModule
  ]
})
export class SkillsModule { }
