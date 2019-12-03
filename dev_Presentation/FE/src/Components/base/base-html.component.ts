import { Component, OnInit, AfterViewInit, ComponentFactoryResolver, ViewChild, ElementRef, Directive } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RenderDetails } from 'src/Classes/renderDetails';
import { AboutMeComponent } from "src/Components/_Content/about-me/about-me.component";

@Component({
  selector: 'app-base-html',
  templateUrl: './base-html.component.html',
  styleUrls: ['./base-html.component.scss']
})
export class BaseHtmlComponent implements OnInit, AfterViewInit {

  @ViewChild("App_Global_Header", { read: true, static: true }) App_Global_Header: ElementRef;
  private RenderDetails = new RenderDetails();
  private DataSnapshot = <object>this.activeRoute.snapshot.data.initialData;

  private Locale: string = this.DataSnapshot.hasOwnProperty("ro_ro") ? "ro_ro" : "en_en";
  private DeviceOrientation: string = this.RenderDetails.WindowDetails.getDeviceOrientation();

  constructor(
    private activeRoute: ActivatedRoute,
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

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
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(AboutMeComponent);
    const containerRef = this.App_Global_Header;
    console.log(containerRef)
    // console.log(containerRef)

    // console.log(containerRef)
    // containerRef.clear();
    // containerRef.createComponent(componentFactory);
  }

  ObjectKeys(obj: object): any {
    return Object.keys(obj);
  }
}
