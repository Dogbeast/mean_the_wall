app.controller('userController', function($scope, $cookies, userFactory){
	$scope.getUser = function(){

		// GRABS ALL DATA ON THE USERAND SAVES IT AS VARIABLE
		userFactory.getUser(id, function(callback){
			$scope.user = callback;
			console.log(callback);
		})
	}
	var id = $cookies.userId;
	$scope.getUser(id);
	$scope.username = $cookies.username;
});