edenProject.controller("loginController", function ($scope, $location, SharedData) {
  $scope.go = function ( path ) { 
    $location.path( path ); 
  };
  SharedData['isHomePage'] = false;
  $scope.SharedData = SharedData;
});