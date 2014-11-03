'use strict';

app.controller('NavCtrl', function NavCtrl($scope, $location, Post) {
    $scope.post = {ur: 'http://', title: ''};

    $scope.submitPost = function() {
      Post.create($scope.post).then(function(ref){
          $location.path('/posts/' + ref.name());
          $scope.post = {url: 'http://', title: ''};
      });
    };
});