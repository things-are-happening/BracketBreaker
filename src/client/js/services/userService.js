<<<<<<< HEAD
angular.module('tournament')
  .service('userService', function($http, $state) {
=======
app.service('userService', function($http, $state) {
>>>>>>> 314003b37d84531c602e66470bd9d95138161d53


    this.loginUser = function(username, password) {
      return $http({
        method: 'POST',
        url: '/api/login',
        data: {
          username: username,
          password: password
        }
      }).then(function(res) {
        console.log(res);
        if (res.status === 200) {
          $state.go('scheduleAdmin');
        } else {
          alert('Login Failed');
        }
      }, function(err) {
        alert('Login Failed');
        res.send(err);
      });
    };

    this.getCurrentUser = function() {
      return $http({
        method: 'GET',
        url: '/api/getCurrentUser'
      }).then(function(res) {
        return res;
      });
    };


    this.logout = function() {
      return $http({
        method: 'GET',
        url: '/api/logout'
      }).then(function(res) {
        return res;
      });
    };

  });
