angular.module('BlocChat.controllers', [])
  .controller('RoomsCtrl', ['$scope', 'Room', function($scope, Room){

    $scope.rooms = Room.all;
    
  }]);