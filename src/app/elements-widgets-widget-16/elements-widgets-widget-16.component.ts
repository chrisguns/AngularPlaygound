import { Component } from "@angular/core";
import { ElementsInfoComponent } from "../elements-info/elements-info.component";
import { ElementsWidgetsWidget12Component } from "../elements-widgets-widget-12/elements-widgets-widget-12.component";
import { ElementsWidgetsWidget14Component } from "../elements-widgets-widget-14/elements-widgets-widget-14.component";
import { ElementsWidgetsWidget2Component } from "../elements-widgets-widget-2/elements-widgets-widget-2.component";
import { IconsMoreHorizontalComponent } from "../icons-more-horizontal/icons-more-horizontal.component";
import { ElementsLineVerticalComponent } from "../elements-line-vertical/elements-line-vertical.component";
import { BgbgComponent } from "../bgbg/bgbg.component";

@Component({
    selector: "app-elements-widgets-widget-16",
    standalone: true,
    templateUrl: "./elements-widgets-widget-16.component.html",
    styleUrls: ["./elements-widgets-widget-16.component.scss"],
    imports: [ElementsInfoComponent, ElementsWidgetsWidget12Component, ElementsWidgetsWidget14Component, ElementsWidgetsWidget2Component, IconsMoreHorizontalComponent, ElementsLineVerticalComponent, BgbgComponent]
})
export class ElementsWidgetsWidget16Component {}

//IconsMoreVerticalComponent, IconsStarComponent, IconsStarFillComponent, IconsStarHalfComponent, IconsStarHalfFillComponent, IconsStarHalf