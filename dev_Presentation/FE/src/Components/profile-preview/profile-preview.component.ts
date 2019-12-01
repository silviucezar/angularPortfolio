import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { HttpService } from 'src/Services/http.service';
import { RenderDetails } from "src/Classes/renderDetails";
import { CanvasDetails } from "src/Interfaces/CanvasDetails";
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './profile-preview.component.html',
  styleUrls: ['./profile-preview.component.scss']
})
export class ProfilePreviewComponent implements OnInit,AfterViewInit {
  title = 'FE';

  private DataSnapshost = <object>this.activeteRoute.snapshot.data;

  constructor
    (
      private activeteRoute: ActivatedRoute
    ) { }

  ngOnInit() {
    console.log(this.DataSnapshost["initialData"])
  }

  ngAfterViewInit () { }

}
