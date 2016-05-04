app.controller("addTournamentCtrl", function($scope, tournamentService, $state){
	// $scope.owner = req.user.email;
	$scope.tournamentType = [{id: 1, type: 'Single elimination',}]
	$scope.gameType = [{id: 1, type: 'Soccer'}, {id: 2, type:'Baseball'}, {id:3, type:'Basketball'}, {id: 4, type:'Hockey'}, {id: 5, type:'Tennis'}, {id: 6, type:'Racquetball'}, {id: 7, type:'Table Tennis'}, {id: 8, type:'eSports'}]
	$scope.tournamentSize = [2, 4, 8, 16, 32]

	$scope.generateBracket = function(tournament){
		var teamArr = [];
		angular.forEach(tournament.teamNames, function(pls) {
			teamArr.push(pls)
		})

		if(teamArr.length <= $scope.tournament.teams){
			var diff = $scope.tournament.teams - teamArr.length
			for(var i = 0; i < diff; i++){
				teamArr.push("TBD")
				console.log(diff)
			}
		}

		$scope.tournament.teamNames = teamArr;

		tournamentService.generateBracketservice(tournament).then(function(response){
			$scope.tournament = null
			$state.go('dashboard')
		})
	}
})
