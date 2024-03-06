import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from "./navigation/navigation.component";
import { FooterComponent } from "./footer/footer.component";

/**
 * AppComponent is the root component of the application.
 *
 * @class
 * @public
 */
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, NavigationComponent, FooterComponent]
})
export class AppComponent {
  /**
   * The title of the application.
   *
   * @public
   */
  title = 'anuglar-playgound';
}