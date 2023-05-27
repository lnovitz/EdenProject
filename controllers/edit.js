edenProject.controller("editController", function ($scope, $location) {
  $scope.go = function ( path ) { 
  $location.path( path ); 
  };
});