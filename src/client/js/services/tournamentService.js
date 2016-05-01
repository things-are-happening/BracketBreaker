app.service("tournamentService", function($q, $http){
	this.generateBracketservice = function(tournament){
		return $http.post('/api/tournament', tournament)
	}

	this.getTournaments = function(){
		var dfd = $q.defer();
		$http.get('/api/tournament').then(function(response){
			dfd.resolve(response.data);
		})
		console.log(dfd.promise)
		return dfd.promise;
	}

	this.getTournamentById = function(id){
		return $http.get('/api/tournament/'+id)
	}

	this.editTournament = function(id, tournament){
		console.log(tournament)
		return $http.put('/api/tournament/'+id, tournament)
	}

	this.deleteTournament = function(id){
  	console.log("userService id", id)
  	return $http.delete("/api/tournament/" + id);
  }

  this.getTournaments = function(){
  	return $http.get("/api/tournament")
  }
})