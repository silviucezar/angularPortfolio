import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './Components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './Components/footer/footer.component';
import { DynamicComponentLoaderComponent } from './Components/component-loader/dynamic-component-loader.component';
import { AboutMeModule } from './Components/Content/about-me/about-me.module'
import { SkillsModule } from './Components/Content/skills/skills.module';
import { EducationModule } from './Components/Content/education/education.module';
import { WorkExperienceComponent } from './Components/Content/work-experience/work-experience.component';
import { WorkExperienceModule } from './Components/Content/work-experience/work-experience.module';
import { ReferencesModule } from './Components/Content/references/references.module';
import { LeaveMessageModule } from './Components/Content/leave-message/leave-message.module';

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
      path: "skills",
      children: []
    }, {
      path: "work-experience",
      children: []
    }, {
      path: "education",
      children: []
    }, {
      path: "references",
      children: []
    }, {
      path: "leave-message",
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
    HeaderComponent,
    FooterComponent,
    DynamicComponentLoaderComponent
  ],
  imports: [
    AboutMeModule,
    SkillsModule,
    EducationModule,
    WorkExperienceModule,
    ReferencesModule,
    LeaveMessageModule,
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
