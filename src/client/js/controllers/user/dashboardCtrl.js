app.controller("dashboardCtrl", function($scope){
	$scope.tournaments = [{
		name: 'World Series',
		game: 'Baseball',
		date: '3/3/2016',
		location: 'New York',
		numberOfTeams: 21
	}, {
		name: 'DevMountain Table Tennis Tourney',
		game: 'Soccer',
		date: '3/3/2016',
		location: 'Rio',
		numberOfTeams: 24
	}, {
		name: 'World Cup',
		game: 'Baseball',
		date: '3/3/2016',
		location: 'eh',
		numberOfTeams: 16
	}, {
		name: 'Eastern Conference',
		game: 'Baseball',
		date: '3/3/2016',
		location: 'Boston',
		numberOfTeams: 8
	}, {
		name: 'NA LCS Playoffs',
		game: 'Baseball',
		date: '3/3/2016',
		location: 'Las Vegas',
		numberOfTeams: 16
	}, {
		name: 'FIFA',
		game: 'Baseball',
		date: '3/3/2016',
		location: 'Rio',
		numberOfTeams: 32
	}]
})