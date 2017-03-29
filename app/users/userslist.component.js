System.register(['angular2/core', "angular2/router", 'rxjs/add/operator/map', "angular2/common", "./users.service"], function(exports_1, context_1) {
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
    var core_1, router_1, common_1, users_service_1;
    var UsersListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (_1) {},
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (users_service_1_1) {
                users_service_1 = users_service_1_1;
            }],
        execute: function() {
            UsersListComponent = (function () {
                function UsersListComponent(_usersService, _router, _formBuilder) {
                    this._usersService = _usersService;
                    this._router = _router;
                    this._formBuilder = _formBuilder;
                    this.isLoading = true;
                    this.users = [];
                }
                UsersListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._usersService.getUsers().subscribe(function (res) {
                        _this.users = res;
                        _this.isLoading = false;
                    });
                };
                UsersListComponent.prototype.deleteUser = function (user) {
                    var _this = this;
                    if (confirm("Are you sure you want to delete " + user.name + "?")) {
                        var index = this.users.indexOf(user);
                        // Here, with the splice method, we remove 1 object
                        // at the given index.
                        this.users.splice(index, 1);
                        this._usersService.deleteUser(user.id)
                            .subscribe(null, function (err) {
                            alert("Could not delete the user.");
                            // Revert the view back to its original state
                            // by putting the user object at the index
                            // it used to be.
                            _this.users.splice(index, 0, user);
                        });
                    }
                };
                UsersListComponent.prototype.addNewUser = function () {
                    this._router.navigate(['UserAdd']);
                };
                UsersListComponent = __decorate([
                    core_1.Component({
                        selector: 'userlist',
                        template: "\n        <!--<i *ngIf=\"isLoading\" class=\"fa fa-spinner fa-spin fa-3x\"></i>-->\n        \n        <form >\n        <h3>Users</h3>\n        <p>\n          <a class=\"btn btn-primary\" (click)=addNewUser()>Add User</a>\n        </p>\n        <div *ngIf=\"isLoading\">\n        <i class=\"fa fa-spinner fa-spin fa-3x\"></i>\n        </div>\n        <div *ngIf=\"!isLoading\">\n        <table class=\"table table-bordered\">\n         <thead>\n          <tr>\n            <th>Name</th>\n            <th>Email</th>\n            <th>Edit</th>\n            <th>Delete</th>\n           </tr>\n         </thead>\n         <tbody *ngFor=\"#user of users\">\n          <tr>\n          <td>{{ user.username }}</td>\n          <td>{{ user.email }}</td>\n          <td > <a [routerLink]=\"['UserEdit', {id: user.id}]\"> <i class=\"glyphicon glyphicon-edit\"> </i> </a></td>\n          <td>  <i (click)=\"deleteUser(user)\" class=\"glyphicon glyphicon-remove clickable\"> </i></td>\n          </tr>\n          \n         </tbody>\n        </table>\n        </div>\n        </form>\n        <!--<div *ngFor=\"#user of users\">\n            <div >\n                <h4>{{ user.username }}</h4>\n            </div>\n            <div>\n                <h4>{{ user.name }}</h4>\n            </div>\n        </div>  -->\n    ",
                        providers: [users_service_1.UsersService],
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [users_service_1.UsersService, router_1.Router, common_1.FormBuilder])
                ], UsersListComponent);
                return UsersListComponent;
            }());
            exports_1("UsersListComponent", UsersListComponent);
        }
    }
});
//# sourceMappingURL=userslist.component.js.map