app.controller("dashboardCtrl", function($scope, tournamentsList, userService){
	$scope.tournaments = tournamentsList;
	$scope.signUpUsers = function(user){
		console.log('shouldnt need this');
	}
	$scope.postUsers = function(){
		userService.postUsers().then(function(response){
			console.log('working');
		})
	};
	$scope.getUser = function(){
		userService.getUsers().then(function(response){
			console.log('working');
		})
	};;
})
