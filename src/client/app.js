var app = angular.module("tournament", ['ui.router']);
app.config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/');
 	$stateProvider

    .state('home', {
      url: '/',
      views: {
        "content": {
          controller: 'dashboardCtrl',
          templateUrl: './templates/home/home.html'
        }
      }
    })

    .state('dashboard', {
      url: '/dashboard',
      views: {
        "content":{
          controller: 'dashboardCtrl',
          templateUrl: './templates/user/dashboard.html'
        }
      },
      resolve: {
        tournamentsList: function(tournamentService){
          return tournamentService.getTournaments();
        }
      }
    })

    .state('edit', {
      url:'/dashboard/:id/edit',
      views:{
        "content": {
          controller: 'editTournamentCtrl',
          templateUrl: './templates/tournament/edit.html'
        }
      },
      resolve: {
        currentTourney: function(tournamentService, $stateParams){
          return tournamentService.getTournamentById($stateParams.id);
        }
      }
    })

    /**
      NOTE: Change app states to become child of 'app' for Auth
    **/

    .state('tournament', {
      url: '/tournament',
      views: {
        "content@" :{
          controller: 'tournamentCtrl',
          templateUrl: './templates/tournament/view.html'
        }
      }
    })

    .state('addTournament', {
      url: '/add',
      views: {
        "content@" : {
          controller: 'addTournamentCtrl',
          templateUrl: './templates/tournament/add.html'
        }
      }
    })

    .state('viewTournament', {
      url: '/view/:id',
      views: {
        "content@" : {
          controller: 'viewTournamentCtrl',
          templateUrl: './templates/tournament/view.html'
        }
      },
      resolve: {
        currentTourney: function(tournamentService, $stateParams){
          return tournamentService.getTournamentById($stateParams.id);
        }
      }
    })

    .state('login', {
      url: '/login',
      views: {
        "content@" : {
          controller: 'loginCtrl',
          templateUrl: './templates/home/home.html'
        }
      }
    })

    .state('signup', {
      url: '/signup',
      views: {
        "content@" : {
          controller: 'dashboardCtrl',
          templateUrl: './templates/home/signup.html'
        }
      }
    })
   
    })
//     .state('signup', {
//       url: '/signup',
//       views: {
//         "content@" : {
//           templateUrl: './templates/home/signup.html'
//         }
//     }
//   })
})
