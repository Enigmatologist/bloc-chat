angular.module('BlocChat.controllers', [])
  .controller('RoomsCtrl', ['$scope', 'Room', '$modal', function($scope, Room, $modal){

    $scope.rooms = Room.all;
    $scope.currentRoom = {};

    $scope.setCurrentRoom = function(room) {
      $scope.currentRoom = room;
    }

    $scope.openCreateRoomModal = function(){
      $modal.open({
        templateUrl: 'templates/create_room.modal.html',
        controller: 'CreateRoomCtrl',
        size: 'sm'
      })
    }
    
  }])

  .controller('CreateRoomCtrl', ['$scope', '$modalInstance', 'Room', function($scope, $modalInstance, Room){

    $scope.rooms = Room.all;
    $scope.newRoom = {};

    $scope.createNewRoom = function(){
      if(!$scope.newRoom.name || $scope.newRoom.name !== ''){
        var newRoom = {
          name: $scope.newRoomName
        };

        Room.create(newRoom).then(function(){
          $scope.newRoom.name = '';
          $modalInstance.close();
        });
      }

      else{
        alert("Room name is undefined");
      } 
    }

    $scope.cancel = function(){
      $modalInstance.close('cancel');
    }
  }])

  .constant('FIREBASE_URL', 'https://fiery-torch-7994.firebaseio.com')