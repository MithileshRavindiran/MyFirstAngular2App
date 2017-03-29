/**
 * Created by x073880 on 2/27/2017.
 */
import {Http} from "angular2/http";
import {Injectable} from "angular2/core";
import {Observable} from "rxjs/Rx"
import 'rxjs/add/operator/map';

@Injectable()
export class UsersService{
    private _baseUrl="https://jsonplaceholder.typicode.com/users";

    constructor(private _http:Http) {

    }

    getUrl(id) {
        return this._baseUrl+ "/" + id;
    }

    getUsers()  {
        return this._http.get(this._baseUrl)
            .map(res => res.json());
    }

    getUser(id) {
        return this._http.get(this.getUrl(id))
            .map(res => res.json());
    }

    updateUser(user){
        return this._http.put(this.getUrl(user.id), JSON.stringify(user))
            .map(res => res.json());
    }

    addUser(user) {
        return this._http.post(this._baseUrl,JSON.stringify(user))
            .map(res => res.json());
    }

    deleteUser(userId){
        return this._http.delete(this.getUrl(userId))
            .map(res => res.json());
    }
}