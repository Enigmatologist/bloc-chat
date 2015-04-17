angular.module('BlocChat.controllers', [])
  .controller('RoomsCtrl', ['$scope', 'Room', '$modal', 'Message', '$cookies', function($scope, Room, $modal, Message, $cookies){

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
        
      if(!$scope.newMessage.content || $scope.newMessage.conent !== '') {

        var newMessage = {
          userName: $cookies.blocChatCurrentUser,
          roomId: $scope.currentRoom.$id,
          content: $scope.newMessage.content,
          createdAt: new Date()
        }

        Message.send(newMessage).then(function(){
          $scope.newMessage = {};
        })

      }
      else{
        alert("Message is undefined");
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

  .controller('SetCurrentUserCtrl', ['$scope', '$modalInstance', '$cookies', function($scope, $modalInstance, $cookies){

    $scope.setCurrentUser = function() {

      if($scope.newCurrentUser && $scope.newCurrentUser !== ''){

        $cookies.blocChatCurrentUser = $scope.newCurrentUser;
        $modalInstance.close();

      }
      else{
        alert("Please enter your user name");
      }
    }
    
  }])







