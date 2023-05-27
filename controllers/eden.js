edenProject.controller("edenController", function ($scope, $location) {
  $scope.go = function ( path ) { 
  $location.path( path ); 
  };
});