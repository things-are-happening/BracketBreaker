app.controller("viewTournamentCtrl", function($scope, currentTourney, tournamentService){
	var teams = currentTourney.data.teamNames
	$scope.tournament = currentTourney.data

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

	$scope.saveMatchData = function(id){
		var roundFiveWinners = []
		var roundFourWinners = []
		var roundThreeWinners = []
		var roundTwoWinners = []
		var roundOneWinners = [] 
		for(var i = 0; i < $scope.tournament.round.roundFive.length; i++){
			if($scope.tournament.round.roundFive[i].teamOneScore > $scope.tournament.round.roundFive[i].teamTwoScore){					
				roundFiveWinners.push($scope.tournament.round.roundFive[i].teamOne)
				console.log($scope.tournament.round.roundFive[i])
			}
			else if($scope.tournament.round.roundFive[i].teamOneScore < $scope.tournament.round.roundFive[i].teamTwoScore){
				roundFiveWinners.push($scope.tournament.round.roundFive[i].teamTwo)
			}
		}
		for(var i = 0; i < roundFiveWinners.length; i+=2){	  
		  var oneMatch = {
				teamOne: roundFiveWinners[i],
				teamTwo: roundFiveWinners[i+1]					
			}
			if($scope.tournament.round.roundFour.length < currentTourney.data.teams / 2){
				$scope.tournament.round.roundFour.push(oneMatch)
			}
			
		}

		for(var i = 0; i < $scope.tournament.round.roundFour.length; i++){
			if($scope.tournament.round.roundFour[i].teamOneScore > $scope.tournament.round.roundFour[i].teamTwoScore){					
				roundFourWinners.push($scope.tournament.round.roundFour[i].teamOne)
				console.log($scope.tournament.round.roundFour[i])
			}
			else if($scope.tournament.round.roundFour[i].teamOneScore < $scope.tournament.round.roundFour[i].teamTwoScore){
				roundFourWinners.push($scope.tournament.round.roundFour[i].teamTwo)
			}
		}
		for(var i = 0; i < roundFourWinners.length; i+=2){	  
		  var oneMatch = {
				teamOne: roundFourWinners[i],
				teamTwo: roundFourWinners[i+1]					
			}
			if($scope.tournament.round.roundThree.length < currentTourney.data.teams / 2){
				$scope.tournament.round.roundThree.push(oneMatch)
			}
			
		}

		for(var i = 0; i < $scope.tournament.round.roundThree.length; i++){
			if($scope.tournament.round.roundThree[i].teamOneScore > $scope.tournament.round.roundThree[i].teamTwoScore){					
				roundThreeWinners.push($scope.tournament.round.roundThree[i].teamOne)
				console.log($scope.tournament.round.roundThree[i])
			}
			else if($scope.tournament.round.roundThree[i].teamOneScore < $scope.tournament.round.roundThree[i].teamTwoScore){
				roundThreeWinners.push($scope.tournament.round.roundThree[i].teamTwo)
			}
		}
		for(var i = 0; i < roundThreeWinners.length; i+=2){	  
		  var oneMatch = {
				teamOne: roundThreeWinners[i],
				teamTwo: roundThreeWinners[i+1]					
			}
			if($scope.tournament.round.roundTwo.length < currentTourney.data.teams / 2){
				$scope.tournament.round.roundTwo.push(oneMatch)
			}
			
		}

		tournamentService.editTournament(id, $scope.tournament)
	}

})
