import { Component, OnInit, AfterViewInit, ComponentFactoryResolver, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RenderDetails } from 'src/Classes/renderDetails';
import { AboutMeComponent } from "src/Components/_Content/about-me/about-me.component";
import { InitialDataService } from "src/Resolvers/initial-data.service";

@Component({
  selector: 'app-base-html',
  templateUrl: './base-html.component.html',
  styleUrls: ['./base-html.component.scss']
})
export class BaseHtmlComponent implements OnInit, AfterViewInit {

  private RenderDetails = new RenderDetails();
  private DataSnapshot = <object>this.activeRoute.snapshot.data.initialData;
  // private Locale: string = this.DataSnapshot.hasOwnProperty("ro_ro") ? "ro_ro" : "en_en";
  private DeviceOrientation: string = this.RenderDetails.WindowDetails.getDeviceOrientation();

  constructor(
    private activeRoute: ActivatedRoute,
    private BaseElement: ElementRef,
    private InitialData: InitialDataService
  ) {
    // this.BaseElementRef = element;
  }

  private ResizeTimeout = null;

  ngOnInit() {
    window.onresize = e => {
      clearTimeout(this.ResizeTimeout);
      this.ResizeTimeout = setTimeout(() => {
        this.DeviceOrientation = this.RenderDetails.WindowDetails.getDeviceOrientation();
        // this.drawCanvas();
      }, 100);
    }
  }

  ngAfterViewInit() {
    this.InitialData.setBaseComponentRef(this.BaseElement);
  }

  ObjectKeys(obj: object): any {
    return Object.keys(obj);
  }

}
