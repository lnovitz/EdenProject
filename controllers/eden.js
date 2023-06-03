edenProject.controller('edenController', ['$scope', '$rootScope', '$location',
      function ($scope, $rootScope, $location) {
        $rootScope.isHomePage = false;
        $rootScope.isLoggedIn = true;

        $scope.go = function (path) {
          $location.path(path);
        };
      }]);