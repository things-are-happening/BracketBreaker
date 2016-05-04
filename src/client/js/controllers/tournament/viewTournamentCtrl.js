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

	$scope.saveRoundOne = function(id){
		var roundOneWinners = []		
		for(var i = 0; i < $scope.tournament.round.roundOne.length; i++){
			if($scope.tournament.round.roundOne[i].teamOneScore > $scope.tournament.round.roundOne[i].teamTwoScore){					
				roundOneWinners.push($scope.tournament.round.roundOne[i].teamOne)
				alert("congratulations team 1")
			}
			else if($scope.tournament.round.roundOne[i].teamOneScore < $scope.tournament.round.roundOne[i].teamTwoScore){
				roundOneWinners.push($scope.tournament.round.roundOne[i].teamTwo)
				alert("congratulations team 2")
			}
			else{
				alert("is a tie")
			}
		}
		tournamentService.editTournament(id, $scope.tournament)
	}
	$scope.saveRoundTwo = function(id){
		var roundTwoWinners = []
		for(var i = 0; i < $scope.tournament.round.roundTwo.length; i++){
			if($scope.tournament.round.roundTwo[i].teamOneScore > $scope.tournament.round.roundTwo[i].teamTwoScore){					
				roundTwoWinners.push($scope.tournament.round.roundTwo[i].teamOne)
				console.log($scope.tournament.round.roundTwo[i])
			}
			else if($scope.tournament.round.roundTwo[i].teamOneScore < $scope.tournament.round.roundTwo[i].teamTwoScore){
				roundTwoWinners.push($scope.tournament.round.roundTwo[i].teamTwo)
			}
		}
		for(var i = 0; i < roundTwoWinners.length; i+=2){	  
		  var oneMatch = {
				teamOne: roundTwoWinners[i],
				teamTwo: roundTwoWinners[i+1]					
			}
			if($scope.tournament.round.roundOne.length < currentTourney.data.teams / 2){
				$scope.tournament.round.roundOne.push(oneMatch)
			}		
		}
		tournamentService.editTournament(id, $scope.tournament)
	}

	$scope.saveRoundThree = function(id){
		var roundThreeWinners = []
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

	$scope.saveRoundFour = function(id){
		var roundFourWinners = []
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
		tournamentService.editTournament(id, $scope.tournament)
	}

	$scope.saveRoundFive = function(id){
		var roundFiveWinners = []
		tournamentService.editTournament(id, $scope.tournament)

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
	}
})
