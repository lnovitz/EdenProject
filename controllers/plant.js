edenProject.controller("plantController", function($scope, $location, $routeParams, SharedData) {
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

  SharedData['isHomePage'] = false;
  $scope.SharedData = SharedData;
});