import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { InitialDataService } from 'src/Resolvers/initial-data.service';
import { AboutMeComponent } from '../Components/_Content/about-me/about-me.component';
import { BaseHtmlComponent } from '../Components/base/base-html.component';
import { HeaderComponent } from 'src/Components/header/header.component';

const AppRoutes: Routes = [
  {
    path: "",
    redirectTo: "portfolio/about-me",
    pathMatch: "full"
  },
  {
    path: "portfolio",
    component: BaseHtmlComponent,
    children: [{
      path: 'about-me',
      children: []
    }
    ],
    resolve: {
      initialData: InitialDataService
    }
  }
]
@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    BaseHtmlComponent,
    HeaderComponent
  ],
  entryComponents: [
    AboutMeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
