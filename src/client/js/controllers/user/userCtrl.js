app.controller('userCtrl', function($scope, $state, userService){

      $scope.loginUser = function(username, password) {
        userService.loginUser(username, password)
        .then(function(res){
          $state.go('dashboard');
        });
      };

      $scope.logout = function() {
        userService.logout()
        .then( function(res){
          $scope.logoutButton = false;
        });
      };



});
