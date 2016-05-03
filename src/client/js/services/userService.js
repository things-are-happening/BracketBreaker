app.service('userService', function($http, $q){
  this.deleteTournament = function(id){
  	console.log("userService id", id)
  	return $http.delete("/api/tournament/" + id);
  }
  this.getTournaments = function(){
  	return $http.get("/api/tournaments")
  }
  this.getTournamentsForUser = function(Usersid) {
  	return $http.get("/api/tournaments/" + Usersid);
  }
})
