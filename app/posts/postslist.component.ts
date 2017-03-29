/**
 * Created by x073880 on 2/15/2017.
 */
import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES,Router} from "angular2/router";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import {ControlGroup, FormBuilder} from "angular2/common";
import {UsersService} from "../users/users.service";
import {PostsService} from "./posts.service";
import {SpinnerComponent} from "../shared/spinner.component";
import {PaginationComponent} from "../shared/pagination.component";

@Component({
    selector: 'postlist',
    templateUrl: 'app/posts/postslist.component.html',
    styles: [`
        .posts li { cursor: default; }
        .posts li:hover { background: #ecf0f1; } 
        .list-group-item.active, 
        .list-group-item.active:hover, 
        .list-group-item.active:focus { 
            background-color: #ecf0f1;
            border-color: #ecf0f1; 
            color: #2c3e50;
        }
    `],
    providers:[PostsService,UsersService],
    directives:[ROUTER_DIRECTIVES,SpinnerComponent,PaginationComponent]
})
export class PostsListComponent implements OnInit{
    postsLoading = true;
    pageSize = 10;
    commentsLoading;
    posts = [];
    users = [];
    pagedPosts = [];
    items;
    currentPost;
  constructor(private _postsService: PostsService, private _userService: UsersService) {

  }
    ngOnInit(){
        this.items = this.loadPosts();
        this.loadUsers();

    }

    private loadUsers() {
        this._userService.getUsers()
            .subscribe(res => this.users=res)
    }

    private loadPosts(filter?){
        this.postsLoading = true;
        this._postsService.getPosts(filter)
            .subscribe(
                posts => {
                    this.posts = posts;
                    //this.pagedPosts = this.getPostsInPage(1);
                    this.pagedPosts = _.take(this.posts, this.pageSize)},
                null,
                () => { this.postsLoading = false; });
    }

    reloadPosts(filter){
        this.currentPost = null;

        this.loadPosts(filter);
    }


    select(post){
        this.commentsLoading=true;
        this.currentPost = post;
        this._postsService.getComments(post.id)
            .subscribe(comments => this.currentPost.comments = comments,
                null,
                () => this.commentsLoading = false);
    }

    onPageChanged(page) {
        //this.pagedPosts = this.getPostsInPage(page);
        var startingIndex = (page - 1) * this.pageSize;
        this.pagedPosts = _.take(_.rest(this.posts,startingIndex),this.pageSize);
    }

    private getPostsInPage(page){
        var result = [];
        var startingIndex = (page - 1) * this.pageSize;
        var endIndex = Math.min(startingIndex + this.pageSize, this.posts.length);

        for (var i = startingIndex; i < endIndex; i++)
            result.push(this.posts[i]);

        return result;
    }

}
