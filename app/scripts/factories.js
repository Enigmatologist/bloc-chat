angular.module('BlocChat.factories',[])
  .factory('Message', ['$firebase', 'FIREBASE_URL', function($firebase, FIREBASE_URL){

    var firebaseRef = new Firebase(FIREBASE_URL);
    var messages = $firebase(firebaseRef.child('messages')).$asArray();

    var message = {
      all: messages,
      send: function(msg){
        return messages.$add(msg);
      },
      get: function(msgId){
        return $firebase(firebaseRef.child('messages').child(msgId)).$asObject();
      }
    }

    return message;

  }])

  .factory('Room', ['$firebase', 'FIREBASE_URL', function($firebase, FIREBASE_URL){

    var firebaseRef = new Firebase(FIREBASE_URL);
    var rooms = $firebase(firebaseRef.child('rooms')).$asArray();

    var room = {
      all: rooms,
      create: function(room) {
        return rooms.$add(room);
      },
      delete: function(room) {
        return rooms.$remove(room);
      },
      messages: function(roomId) {
        return $firebase(firebaseRef.child('messages').orderByChild('roomId').equalTo(roomId)).$asArray();
      }
    }
    return room;
  }])






