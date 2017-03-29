/**
 * Created by x073880 on 2/14/2017.
 */
import {Component} from 'angular2/core';
import {RouteConfig, RouterOutlet, RouterLink, Router} from 'angular2/router';


@Component({
    selector:'navbar',
    templateUrl:'app/navbar.component.html',
    directives:[RouterOutlet, RouterLink]
})
export class NavbarComponent {
    constructor(private _router: Router){
            }

   isCurrentRoute(route){
          var instruction = this._router.generate(route);
          return this._router.isRouteActive(instruction);
      }
}
