import { Component, OnInit } from '@angular/core';
import { InitialDataService } from "../Resolvers/initial-data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'FE';

  constructor(
    private data: InitialDataService,
  ) {

  }

  ngOnInit() {
    // this.data.getInitialData().subscribe(value => {
    //   console.log(value);
    // })
  }
}
