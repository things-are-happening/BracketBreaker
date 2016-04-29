<<<<<<< HEAD
<<<<<<< HEAD
angular.module('tournament')
=======
angular.module('torunament')
>>>>>>> parent of 3b4cb5b... auth working....mostly
.controller('userCtrl', function($scope, $state, userService){
=======
app.controller('userCtrl', function($scope, $state, userService){
>>>>>>> 314003b37d84531c602e66470bd9d95138161d53


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
