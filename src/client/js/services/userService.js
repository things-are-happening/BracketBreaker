app.service('userService', function($http, $q){
  this.deleteTournament = function(id){
  	console.log("userService id", id)
  	return $http.delete("/api/tournament/" + id);
  }
  this.getTournaments = function(){
  	return $http.get("/api/tournament")
  }
})
