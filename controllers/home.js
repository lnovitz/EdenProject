edenProject.controller('homeController', ['$scope', '$rootScope', '$location',
      function ($scope, $rootScope, $location) {
        $rootScope.isHomePage = true;
        $rootScope.isLoggedIn = false;

        $scope.go = function (path) {
          $location.path(path);
        };
      }]);