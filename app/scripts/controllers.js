angular.module('BlocChat.controllers', [])
  .controller('RoomsCtrl', ['$scope', 'Room', '$modal', 'Message', function($scope, Room, $modal, Message){

    $scope.messages = [];
    $scope.rooms = Room.all;
    $scope.currentRoom = {};

    $scope.setCurrentRoom = function(room) {
      $scope.currentRoom = room;
      $scope.messages = Room.messages($scope.currentRoom.$id);
    }

    $scope.openCreateRoomModal = function(){
      $modal.open({
        templateUrl: 'templates/create_room.modal.html',
        controller: 'CreateRoomCtrl',
        size: 'sm'
      })
    }

    $scope.sendMessage = function() {
      if(!scope.newMessage.content || $scope.newMessage.content !== ''){
        
        var newMessage = {
          userName: "Toby Castro",
          content: $scope.newMessage.content,
          createdAt: new Date(),
          roomId: $scope.currentRoom.$id 
        }

        Message.send(newMessage).then(function(){
        $scope.newMessage = {};
        })
      }
      else {
        alert('Please input a message');
      }
    }

  }])

  .controller('CreateRoomCtrl', ['$scope', '$modalInstance', 'Room', function($scope, $modalInstance, Room){

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









