angular.module('BlocChat.controllers', [])
  .controller('RoomsCtrl', ['$scope', 'sampleRooms', '$modal', function($scope, sampleRooms, $modal){

    $scope.rooms = sampleRooms;
    $scope.currentRoom = $scope.rooms[0];

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

    $scope.sendMessage = function() {
        
        var newMessage = {
          userName: "Toby Castro",
          content: $scope.newMessage.content,
          createdAt: new Date(), 
        }

        $scope.currentRoom.messages.push(newMessage);

        $scope.newMessage = {};
      }

  }])

  .controller('CreateRoomCtrl', ['$scope', 'sampleRooms', '$modalInstance', function($scope, sampleRooms, $modalInstance){

    $scope.newRoom = {};

    $scope.createNewRoom = function(){
      if(!$scope.newRoom.name || $scope.newRoom.name !== ''){
        var newRoom = {
          name: $scope.newRoomName.name,
          messages: []
        };

        sampleRooms.push(newRoom);

        $scope.newRoom.name = '';

        $modalInstance.close();
        
      }

      else{
        alert("Room name is undefined");
      } 
    }

    $scope.cancel = function(){
      $modalInstance.close('cancel');
    }
  }])









