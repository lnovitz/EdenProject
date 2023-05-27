edenProject.controller("loginController", function ($scope, $location) {
  $scope.go = function ( path ) { 
  $location.path( path ); 
  };
});