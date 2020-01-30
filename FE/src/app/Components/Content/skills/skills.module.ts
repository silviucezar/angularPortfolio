import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from './skills.component';
import { ImageLoadDirective } from 'src/app/Directives/image-load.directive';
import { CarouselComponent } from './../../extra/carousel/carousel.component';

@NgModule({
  declarations: [SkillsComponent, CarouselComponent, ImageLoadDirective],
  imports: [
    CommonModule
  ],
})
export class SkillsModule { }
