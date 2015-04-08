'use strict';

//External JS files included in app.js
require('./factories');
require('./controllers');

 angular.module('BlocChat', [
  'ui.router',
  'firebase',
  'BlocChat.factories',
  'BlocChat.controllers'
  ])
  .config(['$stateProvider', function($stateProvider){
      //$locationProvider.html5mode(true);

      $stateProvider.state('home', {
        url: '/',
        controller: 'RoomsCtrl',
        templateUrl: '/templates/home.html'
      });
  }]);
