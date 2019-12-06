import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router, RouterState } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutMeComponent } from './Components/_Content/about-me/about-me.component';
import { WorkExperienceComponent } from './Components/_Content/work-experience/work-experience.component';
import { HeaderComponent } from './Components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressBarModule } from '@angular/material/progress-bar';

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
    WorkExperienceComponent
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
    BrowserAnimationsModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
