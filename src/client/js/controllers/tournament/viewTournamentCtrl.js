app.controller("viewTournamentCtrl", function($scope, currentTourney, tournamentService){
	var teams = currentTourney.data.teamNames
	$scope.tournament = currentTourney.data
	var matches = [];

	for(var i = 0; i < teams.length; i+=2){
		var oneMatch = {
			teamOne: teams[i],
			teamTwo: teams[i+1]
		}
		matches.push(oneMatch)
	}
	$scope.tournament.match = matches

	console.log(currentTourney)

	$scope.saveMatchData = function(id){
		tournamentService.editTournament(id, $scope.tournament)
	}

})
