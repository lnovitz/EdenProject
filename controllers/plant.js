edenProject.controller('plantController', ['$scope', '$rootScope', '$location', '$routeParams',
  function($scope, $rootScope, $location, $routeParams) {
    $rootScope.isHomePage = false;
    $rootScope.isLoggedIn = true;

    if ($routeParams.id) {
      console.log("test");
      // Edit an existing item
      // GET to retrieve the item and load in form
    }
    $scope.go = function(path) {
      $location.path(path);
    };

    $(document).ready(function() {
      $("#datepicker").datepicker({
        autoclose: true,
        todayHighlight: true,
      }).datepicker('update', new Date());
    });

    // $scope.save = function() {
    //   if ($routeParams.id) { 
    //     // Update endpoint (PATCH)
    //   } else {
    //     // Create new (POST)
    //   }
    // }
  }]);