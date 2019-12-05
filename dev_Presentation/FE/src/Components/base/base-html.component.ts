import { Component, OnInit, AfterViewInit, ElementRef, ViewContainerRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RenderDetails } from 'src/Classes/renderDetails';
import { InitialDataService } from "src/Resolvers/initial-data.service";
import { AboutMeComponent } from '../_Content/about-me/about-me.component';
import { WorkExperienceComponent } from '../_Content/work-experience/work-experience.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-base-html',
  templateUrl: './base-html.component.html',
  styleUrls: ['./base-html.component.scss'],
  host: {
    "id": "App_Global_Grid",
    "[class]": "DeviceOrientation"
  }
})

export class BaseHtmlComponent implements OnInit, AfterViewInit {


  @ViewChild("App_Global_Header", { read: ViewContainerRef, static: true }) App_Global_Header: ViewContainerRef;

  private RenderDetails = new RenderDetails();
  private DataSnapshot = <object>this.activeRoute.snapshot.data.initialData;
  // private Locale: string = this.DataSnapshot.hasOwnProperty("ro_ro") ? "ro_ro" : "en_en";
  private DeviceOrientation: string = this.RenderDetails.WindowDetails.getDeviceOrientation();

  constructor(
    private activeRoute: ActivatedRoute,
    private BaseElement: ElementRef,
    private InitialData: InitialDataService,
    private ViewContainerRef: ViewContainerRef,
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
    this.InitialData.setBaseComponentRef(this.BaseElement, this.App_Global_Header);
  }

  ObjectKeys(obj: object): any {
    return Object.keys(obj);
  }

}
