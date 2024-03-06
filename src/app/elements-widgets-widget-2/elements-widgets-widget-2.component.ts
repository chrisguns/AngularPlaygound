import { Component } from "@angular/core";
import { ElementsInfoComponent } from "../elements-info/elements-info.component";
import { BgbgComponent } from "../bgbg/bgbg.component";
import { IconsMoreHorizontalComponent } from "../icons-more-horizontal/icons-more-horizontal.component";

@Component({
  selector: "app-elements-widgets-widget-2",
  standalone: true,
  templateUrl: "./elements-widgets-widget-2.component.html",
  styleUrls: ["./elements-widgets-widget-2.component.scss"],
  imports: [ElementsInfoComponent, BgbgComponent, IconsMoreHorizontalComponent],
})
export class ElementsWidgetsWidget2Component {}
