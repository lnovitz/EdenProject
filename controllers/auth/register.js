edenProject.controller("registerController", function ($scope, $location) {
  $scope.go = function ( path ) { 
  $location.path( path ); 
  };
});