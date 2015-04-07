angular.module('BlocChat.factories',[])
  .factory('Room', ['$firebase', function($firebase){

    var firebaseRef = new Firebase("https://fiery-torch-7994.firebaseio.com");
    var rooms = $firebase(firebaseRef.child('rooms')).$asArray();

    return {
      all: rooms
    }
  }]);