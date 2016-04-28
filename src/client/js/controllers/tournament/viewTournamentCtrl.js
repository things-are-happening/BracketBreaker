app.controller("viewTournamentCtrl", function($scope, currentTourney){
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
	$scope.matches = matches
	console.log(matches)


	// switch(currentTourney.data.teams){
	// 	case 2:
	// 		angular.element(document.getElementById("round5")).addClass("active");
	// 		angular.element(document.getElementById("round5tab")).addClass("active");
	// 		break;
	// 	case 4:
	// 		angular.element(document.getElementById("round4")).addClass("active");
	// 		angular.element(document.getElementById("round4tab")).addClass("active");
	// 		break;
	// 	case 8:
	// 		angular.element(document.getElementById("round3")).addClass("active");
	// 		angular.element(document.getElementById("round3tab")).addClass("active");
	// 		break;
	// 	case 16:			
	// 		angular.element(document.getElementById("round2")).addClass("active");
	// 		angular.element(document.getElementById("round2tab")).addClass("active");
	// 		break;
	// 	case 32:
	// 		angular.element(document.getElementById("round1")).addClass("active");
	// 		angular.element(document.getElementById("round1tab")).addClass("active");
	// 		break;
	// 	default:
	// 		console.log("I am Default Scope:",  $scope)
	// 		break;
	// }
})