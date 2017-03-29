/**
 * Created by x073880 on 3/15/2017.
 */

/**
 * Created by x073880 on 2/27/2017.
 */
import {Http} from "angular2/http";
import {Injectable} from "angular2/core";
import {Observable} from "rxjs/Rx"
import 'rxjs/add/operator/map';

@Injectable()
export class PostsService{
    private _baseUrl="https://jsonplaceholder.typicode.com/posts";
    commentsUrl;

    constructor(private _http:Http) {

    }

    getUrl(id) {
        return this._baseUrl+ "/" + id;
    }

    getPosts(filter?) {
        var url = this._baseUrl;

        if (filter && filter.userId)
            url += "?userId=" + filter.userId;

        return this._http.get(url)
            .map(res => res.json());
    }

    getComments(postId){
        return this._http.get(this._baseUrl + "/" + postId + "/comments")
            .map(res => res.json());
    }
}
