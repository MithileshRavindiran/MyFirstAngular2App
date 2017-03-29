System.register(['angular2/core', "angular2/router", 'rxjs/add/operator/map', "../users/users.service", "./posts.service", "../shared/spinner.component", "../shared/pagination.component"], function(exports_1, context_1) {
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
    var core_1, router_1, users_service_1, posts_service_1, spinner_component_1, pagination_component_1;
    var PostsListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (_1) {},
            function (users_service_1_1) {
                users_service_1 = users_service_1_1;
            },
            function (posts_service_1_1) {
                posts_service_1 = posts_service_1_1;
            },
            function (spinner_component_1_1) {
                spinner_component_1 = spinner_component_1_1;
            },
            function (pagination_component_1_1) {
                pagination_component_1 = pagination_component_1_1;
            }],
        execute: function() {
            PostsListComponent = (function () {
                function PostsListComponent(_postsService, _userService) {
                    this._postsService = _postsService;
                    this._userService = _userService;
                    this.postsLoading = true;
                    this.pageSize = 10;
                    this.posts = [];
                    this.users = [];
                    this.pagedPosts = [];
                }
                PostsListComponent.prototype.ngOnInit = function () {
                    this.items = this.loadPosts();
                    this.loadUsers();
                };
                PostsListComponent.prototype.loadUsers = function () {
                    var _this = this;
                    this._userService.getUsers()
                        .subscribe(function (res) { return _this.users = res; });
                };
                PostsListComponent.prototype.loadPosts = function (filter) {
                    var _this = this;
                    this.postsLoading = true;
                    this._postsService.getPosts(filter)
                        .subscribe(function (posts) {
                        _this.posts = posts;
                        //this.pagedPosts = this.getPostsInPage(1);
                        _this.pagedPosts = _.take(_this.posts, _this.pageSize);
                    }, null, function () { _this.postsLoading = false; });
                };
                PostsListComponent.prototype.reloadPosts = function (filter) {
                    this.currentPost = null;
                    this.loadPosts(filter);
                };
                PostsListComponent.prototype.select = function (post) {
                    var _this = this;
                    this.commentsLoading = true;
                    this.currentPost = post;
                    this._postsService.getComments(post.id)
                        .subscribe(function (comments) { return _this.currentPost.comments = comments; }, null, function () { return _this.commentsLoading = false; });
                };
                PostsListComponent.prototype.onPageChanged = function (page) {
                    //this.pagedPosts = this.getPostsInPage(page);
                    var startingIndex = (page - 1) * this.pageSize;
                    this.pagedPosts = _.take(_.rest(this.posts, startingIndex), this.pageSize);
                };
                PostsListComponent.prototype.getPostsInPage = function (page) {
                    var result = [];
                    var startingIndex = (page - 1) * this.pageSize;
                    var endIndex = Math.min(startingIndex + this.pageSize, this.posts.length);
                    for (var i = startingIndex; i < endIndex; i++)
                        result.push(this.posts[i]);
                    return result;
                };
                PostsListComponent = __decorate([
                    core_1.Component({
                        selector: 'postlist',
                        templateUrl: 'app/posts/postslist.component.html',
                        styles: ["\n        .posts li { cursor: default; }\n        .posts li:hover { background: #ecf0f1; } \n        .list-group-item.active, \n        .list-group-item.active:hover, \n        .list-group-item.active:focus { \n            background-color: #ecf0f1;\n            border-color: #ecf0f1; \n            color: #2c3e50;\n        }\n    "],
                        providers: [posts_service_1.PostsService, users_service_1.UsersService],
                        directives: [router_1.ROUTER_DIRECTIVES, spinner_component_1.SpinnerComponent, pagination_component_1.PaginationComponent]
                    }), 
                    __metadata('design:paramtypes', [posts_service_1.PostsService, users_service_1.UsersService])
                ], PostsListComponent);
                return PostsListComponent;
            }());
            exports_1("PostsListComponent", PostsListComponent);
        }
    }
});
//# sourceMappingURL=postslist.component.js.map