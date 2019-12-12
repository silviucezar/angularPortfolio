import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutMeComponent } from './Components/Content/about-me/about-me.component';
import { WorkExperienceComponent } from './Components/Content/work-experience/work-experience.component';
import { HeaderComponent } from './Components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SkillsComponent } from './Components/Content/skills/skills.component';
import { EducationComponent } from './Components/Content/education/education.component';
import { ReferencesComponent } from './Components/Content/references/references.component';
import { LeaveMessageComponent } from './Components/Content/leave-message/leave-message.component';

const AppRoutes: Routes = [
  {
    path: "",
    redirectTo: "portfolio/about-me",
    pathMatch: "full"
  }, {
    path: "portfolio",
    redirectTo: "portfolio/about-me",
    pathMatch: "full"
  },
  {
    path: "portfolio",
    component: AppComponent,
    children: [{
      path: 'about-me',
      children: []
    }, {
      path: "work-experience",
      children: []
    }]
  },
  {
    path: "*",
    redirectTo: "portfolio/about-me",
    pathMatch: "full"
  }
]
@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    HeaderComponent,
    WorkExperienceComponent,
    SkillsComponent,
    EducationComponent,
    ReferencesComponent,
    LeaveMessageComponent
  ],
  entryComponents: [
    HeaderComponent,
    AboutMeComponent,
    WorkExperienceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(AppRoutes),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
