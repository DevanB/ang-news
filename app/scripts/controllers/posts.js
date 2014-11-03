'use strict';

app.controller('PostsCtrl', function PostsCtrl($scope, $location, Post) {
    $scope.posts = Post.all;

    $scope.post = {url: 'http://', title: ''};

    $scope.deletePost = function(post){
        Post.delete(post);
    };
});