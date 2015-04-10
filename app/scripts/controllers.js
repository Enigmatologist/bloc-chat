angular.module('BlocChat.controllers', [])
  .controller('RoomsCtrl', ['$scope', 'Room', function($scope, Room){

    $scope.rooms = [
      {name: 'Room 1'},
      {name: 'Room 2'},
      {name: 'Room 3'}
    ];
    
  }]);