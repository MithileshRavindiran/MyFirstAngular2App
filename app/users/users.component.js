System.register(['angular2/core', "angular2/router", 'rxjs/add/operator/map', "./userslist.component", "./usersadd.component"], function(exports_1, context_1) {
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
    var core_1, router_1, router_2, userslist_component_1, usersadd_component_1;
    var UsersComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (_1) {},
            function (userslist_component_1_1) {
                userslist_component_1 = userslist_component_1_1;
            },
            function (usersadd_component_1_1) {
                usersadd_component_1 = usersadd_component_1_1;
            }],
        execute: function() {
            UsersComponent = (function () {
                function UsersComponent() {
                }
                UsersComponent = __decorate([
                    router_2.RouteConfig([
                        { path: '/', name: 'UsersList', component: userslist_component_1.UsersListComponent, useAsDefault: true },
                        { path: '/addNew', name: 'UserAdd', component: usersadd_component_1.UsersAddComponent },
                        { path: '/:id', name: 'UserEdit', component: usersadd_component_1.UsersAddComponent },
                        { path: '/NotFound', name: 'NotFound', redirectTo: ['UsersList'] },
                        { path: '/*other', name: 'Other', redirectTo: ['UsersList'] }
                    ]),
                    core_1.Component({
                        selector: 'users',
                        template: "\n         <userlist></userlist>\n         <div class=\"container\">\n            <router-outlet></router-outlet>\n        </div>\n",
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], UsersComponent);
                return UsersComponent;
            }());
            exports_1("UsersComponent", UsersComponent);
        }
    }
});
//# sourceMappingURL=users.component.js.map