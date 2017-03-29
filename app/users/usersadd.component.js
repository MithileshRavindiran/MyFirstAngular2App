System.register(["angular2/core", "angular2/common", "./EmailValidator", "angular2/router", "./users.service", "./user"], function(exports_1, context_1) {
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
    var core_1, common_1, EmailValidator_1, router_1, users_service_1, user_1;
    var UsersAddComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (EmailValidator_1_1) {
                EmailValidator_1 = EmailValidator_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (users_service_1_1) {
                users_service_1 = users_service_1_1;
            },
            function (user_1_1) {
                user_1 = user_1_1;
            }],
        execute: function() {
            /**
             * Created by x073880 on 3/3/2017.
             */
            UsersAddComponent = (function () {
                function UsersAddComponent(fb, _userService, _router, _routerParams) {
                    this._userService = _userService;
                    this._router = _router;
                    this._routerParams = _routerParams;
                    this.user = new user_1.User();
                    this.signupForm = fb.group({
                        name: ['', common_1.Validators.compose([
                                common_1.Validators.required,
                                common_1.Validators.minLength(6)])],
                        email: ['', common_1.Validators.compose([common_1.Validators.required, EmailValidator_1.EmailValidator.checkValidEmail])],
                        phoneNumber: [],
                        address: fb.group({
                            street: [],
                            suite: [],
                            city: [],
                            zipCode: []
                        })
                    });
                }
                UsersAddComponent.prototype.routerCanDeactivate = function (next, previous) {
                    console.log("next", next);
                    console.log("previous", previous);
                    if (this.signupForm.dirty)
                        return confirm('You have unsaved changes. Are you sure you want to navigate away?');
                    return true;
                };
                UsersAddComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = this._routerParams.get("id");
                    this.title = id ? "Edit User" : "New User";
                    if (!id)
                        return;
                    this._userService.getUser(id).subscribe(function (user) { return _this.user = user; }, function (response) {
                        if (response.status == 404) {
                            _this._router.navigate(['UsersList']);
                        }
                    });
                };
                UsersAddComponent.prototype.save = function () {
                    /*this._userService.addUser(this.signupForm.value).subscribe(res => {
                        //this.signupForm.markAsPristine();
                        this._router.navigate(['UsersList']);
                    })*/
                    var _this = this;
                    var result;
                    if (this.user.id)
                        result = this._userService.updateUser(this.user);
                    else
                        result = this._userService.addUser(this.user);
                    result.subscribe(function (x) {
                        // Ideally, here we'd want:
                        // this.form.markAsPristine();
                        _this._router.navigate(['NotFound']);
                    });
                };
                UsersAddComponent = __decorate([
                    core_1.Component({
                        selector: 'addUser',
                        templateUrl: 'app/users/usersadd.component.html',
                        providers: [users_service_1.UsersService]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, users_service_1.UsersService, router_1.Router, router_1.RouteParams])
                ], UsersAddComponent);
                return UsersAddComponent;
            }());
            exports_1("UsersAddComponent", UsersAddComponent);
        }
    }
});
//# sourceMappingURL=usersadd.component.js.map