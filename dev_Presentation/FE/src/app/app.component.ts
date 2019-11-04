import { Component,OnInit } from '@angular/core';
import { HttpService} from 'src/Services/http.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'FE';

  constructor
  (
    private http:HttpService
  ) { }

  ngOnInit() {
    this.http.getRequest("",{}).then(result =>{
      console.log(result)
    })
  }
}
