edenProject.controller("createController", function($scope, $location) {
  $scope.go = function(path) {
    $location.path(path);
  };
});