edenProject.controller("createController", function($scope, $location) {
  $scope.go = function(path) {
    $location.path(path);
  };
  $("#datepicker").click(function() {
    console.log("im picked! omgss");
  });
  $(document).ready(function() {
    $("#datepicker").datepicker({
      autoclose: true,
      todayHighlight: true,
    }).datepicker('update', new Date());

  });
});