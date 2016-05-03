app.service("tournamentService", function($q, $http){
	this.generateBracketservice = function(tournament){
		return $http.post('/api/tournament', tournament)
	}

	this.getTournaments = function(){
		var dfd = $q.defer();
		$http.get('/api/tournament').then(function(response){
			dfd.resolve(response.data);
		})
		return dfd.promise;
	}

	this.getTournamentById = function(id){
		return $http.get('/api/tournament/'+id)
	}

	// this.getUserById = function(){
	// 	return $http.get('/')
	// }

	// this.getMatches = function(id){
	// 	var deferred = $q.defer();
	// 	$http.get("/api/tournament/" + id)
	// 		.then(function(response){
	// 			deferred.resolve(response.data.match);
	// 		})
	// 	return deferred.promise;
	// }
})
