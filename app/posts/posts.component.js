System.register(['angular2/router', 'angular2/core', "./postslist.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var router_1, core_1, router_2, postslist_component_1;
    var PostsComponent;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (postslist_component_1_1) {
                postslist_component_1 = postslist_component_1_1;
            }],
        execute: function() {
            PostsComponent = (function () {
                function PostsComponent() {
                }
                PostsComponent = __decorate([
                    router_1.RouteConfig([
                        { path: '/', name: 'PostsList', component: postslist_component_1.PostsListComponent, useAsDefault: true },
                        { path: '/*other', name: 'Other', redirectTo: ['PostsList'] }
                    ]),
                    core_1.Component({
                        selector: 'posts',
                        template: "\n         <postlist></postlist>\n         <div class=\"container\">\n            <router-outlet></router-outlet>\n        </div>\n",
                        directives: [router_2.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], PostsComponent);
                return PostsComponent;
            }());
            exports_1("PostsComponent", PostsComponent);
        }
    }
});
//# sourceMappingURL=posts.component.js.map