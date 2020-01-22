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
