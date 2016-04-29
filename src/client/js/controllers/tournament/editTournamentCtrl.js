app.controller("editTournamentCtrl", function($scope, currentTourney, tournamentService, $state){
	$scope.tournamentType = [{id: 1, type: 'Single elimination',}, {id:2, type:'Double elimination'}]
	$scope.gameType = [{id: 1, type: 'Soccer'}, {id: 2, type:'Baseball'}, {id:3, type:'Basketball'}, {id: 4, type:'Formula 1'}, {id: 5, type:'Esports'}]
	$scope.tournamentSize = [2, 4, 8, 16, 32]
	$scope.tournament = currentTourney
	$scope.tournament.data.start = new Date(currentTourney.data.start)
	$scope.tournament.data.end = new Date(currentTourney.data.end)

	$scope.editTournament = function(id, tourney){
		console.log("id", id)
		console.log("tournament", tourney)
		tournamentService.editTournament(id, tourney).then(function(response){
			$state.go('dashboard')
		})
	}
})