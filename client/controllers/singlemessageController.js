app.controller('singlemessageController', function($scope, $routeParams, $cookies, messageFactory, userFactory){
	
	$scope.getMessage = function(){
		var id = $routeParams.id
		// GRABS MESSAGE AND SAVES IT AS MESSAGE VARIABLE
		messageFactory.getMessage(id, function(callback){
			$scope.Message = callback;
			console.log(callback);
		})
	}
	// $scope.getUsers = function(){
	// 	userFactory.getUsers(function(callback){
	// 		console.log(callback);
	// 		$scope.allUsers = callback;

	// 	})
	// }
	$scope.getMessage();
	// $scope.getUsers();
});