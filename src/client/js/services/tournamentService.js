app.service("tournamentService", function($q, $http){
	this.generateBracketservice = function(tournament){
		return $http.post('/api/bracket', tournament)
	}
})