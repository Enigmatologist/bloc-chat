'use strict';

//External JS files included in app.js
require('./samples');
require('./factories');
require('./controllers');

 angular.module('BlocChat', [
  'ui.router',
  'firebase',
  'ngCookies',
  'ui.bootstrap',
  'BlocChat.factories',
  'BlocChat.samples',
  'BlocChat.controllers'
  ])
  .config(['$locationProvider', '$stateProvider', function($locationProvider, $stateProvider){
      $locationProvider.html5Mode(true);

      $stateProvider.state('home', {
        url: '/',
        controller: 'RoomsCtrl',
        templateUrl: 'templates/home.html'
      });
  }])

  .run(['$cookies', '$modal', function($cookies, $modal){

    if(!$cookies.blocChatCurrentUser || $cookies.blocChatCurrentUser === ''){

      $modal.open({
        templateUrl: 'templates/set_current_user.modal.html',
        controller: 'SetCurrentUserCtrl',
        size: 'sm'
      })

    }
    
  }])





