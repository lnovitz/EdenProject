edenProject.controller('loginController', ['$scope', '$rootScope', '$location',
      function ($scope, $rootScope, $location) {
        $rootScope.isHomePage = false;
        $rootScope.isLoggedIn = false;

        $scope.go = function (path) {
          $location.path(path);
        };
      }]);