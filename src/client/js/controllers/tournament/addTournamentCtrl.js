app.controller("addTournamentCtrl", function($scope, tournamentService, $state){
	$scope.tournamentType = [{id: 1, type: 'single elimination',}, {id:2, type:'double elimination'}]
	$scope.gameType = [{id: 1, type: 'soccer'}, {id: 2, type:'baseball'}, {id:3, type:'basketball'}, {id: 4, type:'formula 1'}, {id: 5, type:'esports'}]
	$scope.tournamentSize = [2, 4, 8, 16, 32]

	$scope.generateBracket = function(tournament){
		tournamentService.generateBracketservice(tournament).then(function(response){

			$state.go('dashboard')
		})
	}
	
})