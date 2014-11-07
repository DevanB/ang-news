'use strict';

app.controller('PostsCtrl', function PostsCtrl($scope, $location, Post, Auth) {
    $scope.posts = Post.all;
    $scope.user = Auth.user;
    $scope.post = {url: 'http://', title: ''};

    $scope.deletePost = function(post){
        Post.delete(post);
    };
});
