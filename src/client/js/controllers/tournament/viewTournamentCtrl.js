app.controller("viewTournamentCtrl", function($scope, currentTourney, tournamentService){
	var teams = currentTourney.data.teamNames
	$scope.tournament = currentTourney.data
	$scope.advance = function(scope.tournament)

	//populate initial tab with matches

	switch(currentTourney.data.teams){

		case 2:
			for(var i = 0; i < teams.length; i+=2){
	  		var oneMatch = {
					teamOne: teams[i],
					teamTwo: teams[i+1]
				}
				if($scope.tournament.round.roundOne.length < currentTourney.data.teams / 2){
					$scope.tournament.round.roundOne.push(oneMatch)
				}
			}
			break;

		case 4:
			for(var i = 0; i < teams.length; i+=2){
	  		var oneMatch = {
					teamOne: teams[i],
					teamTwo: teams[i+1]
				}
				if($scope.tournament.round.roundTwo.length < currentTourney.data.teams / 2){
					$scope.tournament.round.roundTwo.push(oneMatch)
				}
			}
			break;

		case 8:
			for(var i = 0; i < teams.length; i+=2){
			  var oneMatch = {
					teamOne: teams[i],
					teamTwo: teams[i+1]
				}
				if($scope.tournament.round.roundThree.length < currentTourney.data.teams / 2){
					$scope.tournament.round.roundThree.push(oneMatch)
				}
			}
			break;

		case 16:
			for(var i = 0; i < teams.length; i+=2){
			  var oneMatch = {
					teamOne: teams[i],
					teamTwo: teams[i+1]
				}
				if($scope.tournament.round.roundFour.length < currentTourney.data.teams / 2){
					$scope.tournament.round.roundFour.push(oneMatch)
				}
			}
			break;

		case 32:
			for(var i = 0; i < teams.length; i+=2){
			  var oneMatch = {
					teamOne: teams[i],
					teamTwo: teams[i+1]
				}
				if($scope.tournament.round.roundFive.length < currentTourney.data.teams / 2){
					$scope.tournament.round.roundFive.push(oneMatch)
				}
			}
			break;
	}


	// var matches = {
	// 	roundOne: $scope.tournament.round.roundOne,
	// 	roundTwo: $scope.tournament.round.roundTwo,
	// 	roundThree: $scope.tournament.round.roundThree,
	// 	roundFour: $scope.tournament.round.roundFour,
	// 	roundFive: $scope.tournament.round.roundFive
	// };





	$scope.saveMatchData = function(id){
		tournamentService.editTournament(id, $scope.tournament)
	}
	var roundOneWinners = [];

	if(teamOneScore > teamTwoScore) {
		roundOneWinners.push(teamOne)
	} else if(teamOneScore < teamTwoScore) {
		roundOneWinners.push(teamTwo)
	} else {
		alert("ties no work....");
	}

	var roundTwoWinners = [];

	if(teamOneScore > teamTwoScore) {
		roundTwoWinners.push(teamOne)
	} else if(teamOneScore < teamTwoScore) {
		roundTwoWinners.push(teamTwo)
	} else {
		alert("ties no work....");
	}

	var roundThreeWinners = [];

	if(teamOneScore > teamTwoScore) {
		roundThreeWinners.push(teamOne)
	} else if(teamOneScore < teamTwoScore) {
		roundThreeWinners.push(teamTwo)
	} else {
		alert("ties no work....");
	}

	var roundFourWinners = [];

	if(teamOneScore > teamTwoScore) {
		roundOneWinners.push(teamOne)
	} else if(teamOneScore < teamTwoScore) {
		roundFourWinners.push(teamTwo)
	} else {
		alert("ties no work....");
	}

	var roundFiveWinners = [];

	if(teamOneScore > teamTwoScore) {
		roundOneWinners.push(teamOne)
	} else if(teamOneScore < teamTwoScore) {
		roundFiveWinners.push(teamTwo)
	} else {
		alert("ties no work....");
	}

})
