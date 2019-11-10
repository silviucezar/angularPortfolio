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
  src = null;

  constructor
    (
      private http: HttpService
    ) { }

  ngOnInit() {
    // const fileStream: fileStream = {
    //   Range: "bytes=0-1023",
    //   Sequential: true
    // }
    // this.http.getRequest("", fileStream).then(result => {
    //   let blob = new Blob(result)
    //   this.src = URL.createObjectURL(blob);
    //   console.log(this.src)
    // });
  }

  testvideo(e) {
    console.log(e);
  }
}
