import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from './skills.component';

@NgModule({
  declarations: [SkillsComponent],
  entryComponents: [SkillsComponent],
  imports: [
    CommonModule
  ]
})
export class SkillsModule {
  static component = SkillsComponent;
}
