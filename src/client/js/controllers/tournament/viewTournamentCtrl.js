app.controller("viewTournamentCtrl", function($scope, currentTourney){
	$scope.tournament = currentTourney.data
	$scope.matches = currentTourney.data.teamName;

	console.log($scope.matches)
})