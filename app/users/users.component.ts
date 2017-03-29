/**
 * Created by x073880 on 2/15/2017.
 */
import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from "angular2/router";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import {UsersService} from "./users.service";
import {RouteConfig, RouterOutlet, RouterLink} from 'angular2/router';
import {UsersListComponent} from "./userslist.component";
import {UsersAddComponent} from "./usersadd.component";


@RouteConfig([
    {path:'/', name:'UsersList', component: UsersListComponent, useAsDefault:true},
    {path:'/addNew', name:'UserAdd', component: UsersAddComponent},
    {path:'/:id', name:'UserEdit', component: UsersAddComponent},
    {path:'/NotFound', name:'NotFound', redirectTo: ['UsersList']},
    {path:'/*other', name:'Other', redirectTo: ['UsersList']}
])
@Component({
    selector: 'users',
    template: `
         <userlist></userlist>
         <div class="container">
            <router-outlet></router-outlet>
        </div>
`,
    directives:[ROUTER_DIRECTIVES]
})
export class UsersComponent {


    
  constructor() {

  }


}
