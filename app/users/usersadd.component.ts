import {Component, OnInit} from "angular2/core";
import {ControlGroup, FormBuilder, Validators} from "angular2/common";
import {EmailValidator} from "./EmailValidator";
import {CanDeactivate, Router, RouteParams, ROUTER_DIRECTIVES} from "angular2/router";
import {UsersService} from "./users.service";
import {User} from "./user";
/**
 * Created by x073880 on 3/3/2017.
 */

@Component({
    selector:'addUser',
    templateUrl:'app/users/usersadd.component.html',
    providers:[UsersService]
})
export class UsersAddComponent implements OnInit,CanDeactivate{
    signupForm : ControlGroup;
    title : string;
    user = new User();

    constructor(fb: FormBuilder, private _userService:UsersService, private _router:Router, private _routerParams:RouteParams) {
        this.signupForm = fb.group({
            name: ['',Validators.compose([
                Validators.required,
                Validators.minLength(6)])],
            email: ['',Validators.compose([Validators.required,EmailValidator.checkValidEmail])],
            phoneNumber: [],
            address: fb.group({
            street: [],
            suite: [],
            city: [],
            zipCode: []
        })
        })
    }

    routerCanDeactivate(next, previous) {
        console.log("next",next);
        console.log("previous", previous);
        if (this.signupForm.dirty)
            return confirm('You have unsaved changes. Are you sure you want to navigate away?');

        return true;
    }

    ngOnInit() {
        var id = this._routerParams.get("id");

        this.title = id ? "Edit User" : "New User";

        if (!id)
            return;
        
        this._userService.getUser(id).subscribe(
            user => this.user = user,
            response => {
            if (response.status == 404) {
                this._router.navigate(['UsersList']);
                }
            });

    }

    save(){
        /*this._userService.addUser(this.signupForm.value).subscribe(res => {
            //this.signupForm.markAsPristine();
            this._router.navigate(['UsersList']);
        })*/

        var result;

        if (this.user.id)
            result = this._userService.updateUser(this.user);
        else
            result = this._userService.addUser(this.user)

        result.subscribe(x => {
            // Ideally, here we'd want:
            // this.form.markAsPristine();
            this._router.navigate(['NotFound']);
        });
    }

}
