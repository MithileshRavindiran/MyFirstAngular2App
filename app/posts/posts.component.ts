/**
 * Created by x073880 on 2/15/2017.
 */
import {RouteConfig, RouterOutlet, RouterLink} from 'angular2/router';
import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from "angular2/router";
import {PostsListComponent} from "./postslist.component";

@RouteConfig([
    {path:'/', name:'PostsList', component: PostsListComponent, useAsDefault:true},
    {path:'/*other', name:'Other', redirectTo: ['PostsList']}
])
@Component({
    selector: 'posts',
    template: `
         <postlist></postlist>
         <div class="container">
            <router-outlet></router-outlet>
        </div>
`,
    directives:[ROUTER_DIRECTIVES]
})
export class PostsComponent{

}
