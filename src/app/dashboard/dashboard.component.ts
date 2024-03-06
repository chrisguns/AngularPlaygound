import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { IconsSearchComponent } from '../icons-search/icons-search.component';
import { ElementsWidgetsWidget16Component } from '../elements-widgets-widget-16/elements-widgets-widget-16.component';
import { ElementsWidgetsWidget14Component } from '../elements-widgets-widget-14/elements-widgets-widget-14.component';
import { ElementsUserPhotoComponent } from '../elements-user-photo/elements-user-photo.component';
import { OvalComponent } from '../oval/oval.component';
import { IconsPlusPlusComponent } from '../icons-plus-plus/icons-plus-plus.component';
import { ElementsWidgetsWidget12Component } from '../elements-widgets-widget-12/elements-widgets-widget-12.component';
import { ElementsWidgetsWidget2Component } from '../elements-widgets-widget-2/elements-widgets-widget-2.component';
import { ElementsWidgetsWidget7Component } from '../elements-widgets-widget-7/elements-widgets-widget-7.component';
import { ElementsWidgetsWidget9Component } from '../elements-widgets-widget-9/elements-widgets-widget-9.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  imports: [
    MenuComponent,
    IconsSearchComponent,
    ElementsWidgetsWidget16Component,
    ElementsWidgetsWidget14Component,
    ElementsUserPhotoComponent,
    OvalComponent,
    IconsPlusPlusComponent,
    ElementsWidgetsWidget9Component,
    ElementsWidgetsWidget2Component,
    ElementsWidgetsWidget7Component,
    ElementsWidgetsWidget12Component,
  ],
})
export class DashboardComponent {}
