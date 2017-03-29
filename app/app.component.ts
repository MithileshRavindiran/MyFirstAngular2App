import {Component} from 'angular2/core';
import {NavbarComponent} from "./navbar.component";
import {UsersComponent} from "./users/users.component";
import {PostsComponent} from "./posts/posts.component";
import {HomeComponent} from "./home.component";
import {RouteConfig, RouterOutlet, RouterLink} from 'angular2/router';

@RouteConfig([
    {path:'/users/...', name:'Users', component: UsersComponent},
    {path:'/posts/...', name:'Posts', component: PostsComponent},
    {path:'/', name:'Home', component: HomeComponent ,useAsDefault:true},
    {path:'/*other', name:'Other', redirectTo: ['Home']}
])
@Component({
    selector: 'my-app',
    template: `
         <navbar></navbar>
         <div class="container">
            <router-outlet></router-outlet>
        </div>
`,
    directives:[NavbarComponent, RouterOutlet, RouterLink]
})
export class AppComponent {
}