'use strict';

app.controller('PostViewCtrl', function PostViewCtrl($scope, $routeParams, Post) {
    $scope.post = Post.get($routeParams.postId);
});