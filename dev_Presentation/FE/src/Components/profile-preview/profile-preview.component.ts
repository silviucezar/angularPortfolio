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
export class ProfilePreviewComponent implements OnInit, AfterViewInit {
  title = 'FE';

  private DataSnapshot = <object>this.activeRoute.snapshot.data.initialData;
  private locale: string = this.DataSnapshot.hasOwnProperty("ro_ro") ? "ro_ro" : "en_en";

  constructor
    (
      private activeRoute: ActivatedRoute
    ) { }

  ngOnInit() {
    console.log(this.DataSnapshot)
  }

  ngAfterViewInit() { }

  ObjectKeys(obj: object): any {
    return Object.keys(obj);
  }

}
