import { Component } from "@angular/core";
import { ElementsInfoComponent } from "../elements-info/elements-info.component";
import { ElementsWidgetsWidget12Component } from "../elements-widgets-widget-12/elements-widgets-widget-12.component";
import { ElementsWidgetsWidget2Component } from "../elements-widgets-widget-2/elements-widgets-widget-2.component";
import { ElementsWidgetsWidget7Component } from "../elements-widgets-widget-7/elements-widgets-widget-7.component";
import { BgbgComponent } from "../bgbg/bgbg.component";
import { IconsMoreHorizontalComponent } from "../icons-more-horizontal/icons-more-horizontal.component";

@Component({
  selector: "app-elements-widgets-widget-9",
  standalone: true,
  templateUrl: "./elements-widgets-widget-9.component.html",
  styleUrls: ["./elements-widgets-widget-9.component.scss"],
  imports: [ElementsInfoComponent, ElementsWidgetsWidget12Component, ElementsWidgetsWidget7Component, ElementsWidgetsWidget2Component, BgbgComponent, IconsMoreHorizontalComponent]
})
export class ElementsWidgetsWidget9Component {}
