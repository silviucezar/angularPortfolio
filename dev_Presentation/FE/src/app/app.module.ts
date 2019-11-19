import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { InitialDataService} from 'src/Resolvers/initial-data.service';
import { ProfilePreviewComponent } from '../Components/profile-preview/profile-preview.component';

const AppRoutes : Routes = [
  {
    path : "",
    redirectTo : "profile-preview",
    pathMatch : "full"
  },
  {
    path : "profile-preview",
    component : ProfilePreviewComponent,
    resolve : {
      initialData : InitialDataService
    } 
  }
]
@NgModule({
  declarations: [
    AppComponent,
    ProfilePreviewComponent
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
