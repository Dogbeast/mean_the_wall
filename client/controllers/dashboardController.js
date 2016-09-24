app.controller('dashboardController', function($scope, $cookies, messageFactory){
	$scope.getAllMessages = function(){
		// GRABS ALL MESSAGES AND SAVES IT AS ALLMESSAGES VARIABLE
		messageFactory.getAllMessages(function(callback){
			$scope.allMessages = callback;
			console.log(callback);
		})
	}
	$scope.getAllMessages();
	$scope.username = $cookies.username;
});