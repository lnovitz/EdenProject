edenProject.controller("homeController", function ($scope, $location) {
  $scope.go = function ( path ) { 
  $location.path( path ); 
  };
});