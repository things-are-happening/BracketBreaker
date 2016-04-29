app.controller("dashboardCtrl", function($scope, tournamentsList, userService, tournamentService){
	$scope.tournaments = tournamentsList.data;
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
	};
	$scope.deleteTournament = function(id){		
		tournamentService.deleteTournament(id).then(function(response){
			tournamentService.getTournaments().then(function(response){
				$scope.tournaments = response.data;
			})
		})
	}
})