app.controller("viewTournamentCtrl", function($scope, currentTourney){
	$scope.tournament = currentTourney.data
	console.log(currentTourney)
})