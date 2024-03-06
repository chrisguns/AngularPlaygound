import { Component } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';

/**
 * HomeComponent is the component that represents the home page of the application.
 *
 * @class
 * @public
 */
@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [DashboardComponent]
})
export class HomeComponent {

}