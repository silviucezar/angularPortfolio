import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './Components/Root/app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './Components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './Components/footer/footer.component';
import { DynamicComponentLoaderComponent } from './Components/Loaders/dynamic-component-loader.component';
import { AboutMeModule } from './Components/Content/about-me/about-me.module'
import { SkillsModule } from './Components/Content/skills/skills.module';
import { EducationModule } from './Components/Content/education/education.module';
import { JobsModule } from './Components/Content/jobs/jobs.module';
import { ReferencesModule } from './Components/Content/references/references.module';
import { LeaveMessageModule } from './Components/Content/leave-message/leave-message.module';
import { HeaderTextLoaderComponent } from './Components/Loaders/header-text-loader.component';

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
      path: "jobs",
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
    DynamicComponentLoaderComponent,
    HeaderTextLoaderComponent
  ],
  imports: [
    AboutMeModule,
    SkillsModule,
    EducationModule,
    JobsModule,
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
