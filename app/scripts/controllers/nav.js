'use strict';

app.controller('NavCtrl', function NavCtrl($scope, $location, Post, Auth) {
    $scope.post = {url: 'http://', title: ''};
    $scope.user = Auth.user;

    $scope.submitPost = function() {
      Post.create($scope.post).then(function(ref){
          $location.path('/posts/' + ref.name());
          $scope.post = {url: 'http://', title: ''};
      });
    };

    $scope.signedIn = Auth.signedIn;
    $scope.logout = Auth.logout;
});
