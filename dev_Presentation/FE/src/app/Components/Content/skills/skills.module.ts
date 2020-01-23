import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from './skills.component';
import { ImageLoadDirective } from 'src/app/Directives/image-load.directive';
@NgModule({
  declarations: [SkillsComponent, ImageLoadDirective],
  imports: [
    CommonModule
  ],
})
export class SkillsModule { }
