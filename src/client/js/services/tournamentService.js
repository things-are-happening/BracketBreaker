app.service("tournamentService.js", function($q, $http){
	this.generateBracketservice = function(tournament){
		return $http.post('/api/bracket', tournament)
	}
})