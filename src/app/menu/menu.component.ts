import { Component } from "@angular/core";
import { IconsSettingsSetting1Component } from "../icons-settings-setting-1/icons-settings-setting-1.component";
import { IconsPieChartComponent } from "../icons-pie-chart/icons-pie-chart.component";
import { IconsFireComponent } from "../icons-fire/icons-fire.component";
import { IconsCalendarComponent } from "../icons-calendar/icons-calendar.component";
import { IconsImageComponent } from "../icons-image/icons-image.component";
import { IconsActivityComponent } from "../icons-activity/icons-activity.component";
import { IconsCloudDownloadComponent } from "../icons-cloud-download/icons-cloud-download.component";
import { IconsPersonPersonComponent } from "../icons-person-person/icons-person-person.component";
import { ElementsLineGorizontalComponent } from "../elements-line-gorizontal/elements-line-gorizontal.component";
import { LogoComponent } from "../logo/logo.component";

@Component({
  selector: "app-menu",
  standalone: true,
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"],
  imports: [IconsSettingsSetting1Component, IconsPieChartComponent, IconsFireComponent, IconsCalendarComponent, IconsImageComponent, IconsActivityComponent, IconsCloudDownloadComponent, IconsPersonPersonComponent, ElementsLineGorizontalComponent, LogoComponent],
})
export class MenuComponent {}
