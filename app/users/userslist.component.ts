/**
 * Created by x073880 on 2/15/2017.
 */
import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES,Router} from "angular2/router";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import {ControlGroup, FormBuilder} from "angular2/common";
import {UsersService} from "./users.service";

@Component({
    selector: 'userlist',
    template: `
        <!--<i *ngIf="isLoading" class="fa fa-spinner fa-spin fa-3x"></i>-->
        
        <form >
        <h3>Users</h3>
        <p>
          <a class="btn btn-primary" (click)=addNewUser()>Add User</a>
        </p>
        <div *ngIf="isLoading">
        <i class="fa fa-spinner fa-spin fa-3x"></i>
        </div>
        <div *ngIf="!isLoading">
        <table class="table table-bordered">
         <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Edit</th>
            <th>Delete</th>
           </tr>
         </thead>
         <tbody *ngFor="#user of users">
          <tr>
          <td>{{ user.username }}</td>
          <td>{{ user.email }}</td>
          <td > <a [routerLink]="['UserEdit', {id: user.id}]"> <i class="glyphicon glyphicon-edit"> </i> </a></td>
          <td>  <i (click)="deleteUser(user)" class="glyphicon glyphicon-remove clickable"> </i></td>
          </tr>
          
         </tbody>
        </table>
        </div>
        </form>
        <!--<div *ngFor="#user of users">
            <div >
                <h4>{{ user.username }}</h4>
            </div>
            <div>
                <h4>{{ user.name }}</h4>
            </div>
        </div>  -->
    `,
    providers:[UsersService],
    directives:[ROUTER_DIRECTIVES]
})
export class UsersListComponent implements OnInit{

    form : ControlGroup;
    isLoading = true;
    users = [];
    
  constructor(private _usersService: UsersService, private _router:Router, private _formBuilder: FormBuilder) {

  }
    ngOnInit(){
        this._usersService.getUsers().subscribe(res =>{
            this.users = res;
            this.isLoading = false;
        });
    }

    deleteUser(user){
        if (confirm("Are you sure you want to delete " + user.name + "?")) {
            var index = this.users.indexOf(user)
            // Here, with the splice method, we remove 1 object
            // at the given index.
            this.users.splice(index, 1);

            this._usersService.deleteUser(user.id)
                .subscribe(null,
                    err => {
                        alert("Could not delete the user.");
                        // Revert the view back to its original state
                        // by putting the user object at the index
                        // it used to be.
                        this.users.splice(index, 0, user);
                    });
        }
    }

    addNewUser(){
        this._router.navigate(['UserAdd']);
    }

}
