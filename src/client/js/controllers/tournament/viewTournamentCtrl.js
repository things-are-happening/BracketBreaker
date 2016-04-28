app.controller("viewTournamentCtrl", function($scope, currentTourney){
	var teams = currentTourney.data.teamNames
	$scope.tournament = currentTourney.data
	console.log(currentTourney)	
	var matches = [];

	// angular.forEach(teams, function(){
	// 	matches.push({
	// 		teamOne: teams[],
	// 		teamTwo: teams[]
	// 	})
	// })

	switch(currentTourney.data.teams){
		case 2:
			angular.element(document.getElementById("round5")).addClass("active");
			angular.element(document.getElementById("round1")).remove();
			angular.element(document.getElementById("round2")).remove();
			angular.element(document.getElementById("round3")).remove();
			angular.element(document.getElementById("round4")).remove();
			angular.element(document.getElementById("round5tab")).addClass("active");
			angular.element(document.getElementById("round1tab")).remove();
			angular.element(document.getElementById("round2tab")).remove();
			angular.element(document.getElementById("round3tab")).remove();
			angular.element(document.getElementById("round4tab")).remove();
			break;
		case 4:
			angular.element(document.getElementById("round4")).addClass("active");
			angular.element(document.getElementById("round4tab")).addClass("active");
			angular.element(document.getElementById("round1tab")).remove();
			angular.element(document.getElementById("round2tab")).remove();
			angular.element(document.getElementById("round3tab")).remove();
			break;
		case 8:
			angular.element(document.getElementById("round3")).addClass("active");
			angular.element(document.getElementById("round3tab")).addClass("active");
			angular.element(document.getElementById("round1tab")).remove();
			angular.element(document.getElementById("round2tab")).remove();
			break;
		case 16:			
			angular.element(document.getElementById("round2")).addClass("active");
			angular.element(document.getElementById("round2tab")).addClass("active");
			angular.element(document.getElementById("round1tab")).remove();
			break;
		case 32:
			angular.element(document.getElementById("round1")).addClass("active");
			angular.element(document.getElementById("round1tab")).addClass("active");
			break;
	}

	for(var i = 0; i < teams.length; i+=2){
		var oneMatch = {
			teamOne: teams[i],
			teamTwo: teams[i+1]
		}
		matches.push(oneMatch)
	}
	$scope.matches = matches
	console.log(matches)

})