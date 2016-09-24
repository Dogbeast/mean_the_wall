app.controller('messageController', function($scope, $cookies, messageFactory){
	$scope.createComment = function(commentText, messageId){
		// GRABS COMMENT AND MESSAGE ID FROM THE HTML
		// INSERTS THE USERS ID # FROM COOKIES AND SENDS TO FACTORY
		var userId = $cookies.userId;
		messageFactory.createComment(commentText, messageId, userId, function(callback){
			console.log('messageController createComment: ',callback);
		})
		$scope.getAllMessages();
	}
	$scope.createMessage = function(){
		var message = $scope.messageText;
		var userId = $cookies.userId;
		var category = $scope.newCategory;
		messageFactory.createMessage(message, category, userId, function(callback){
			console.log('messageController createMessage: ',callback);
		});
		$scope.getAllMessages();
	}
	$scope.getAllMessages = function(){
		// GRABS ALL MESSAGES AND SAVES IT AS ALLMESSAGES VARIABLE
		messageFactory.getAllMessages(function(callback){
			$scope.allMessages = callback;
		})
	}
	$scope.getAllMessages();
});