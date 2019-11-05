import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/Services/http.service';
import { fileStream } from 'src/Interfaces/fileStream';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'FE';

  constructor
    (
      private http: HttpService
    ) { }

  ngOnInit() {
    const fileStream: fileStream = {
      Range: false,
      Sequential: true
    }
    this.http.getRequest("", { params: fileStream }).then(result => {
      console.log(result)
    });
  }
}
