app.controller('sessionController', function($scope, $cookies, $location){
	$scope.loginPage = function(){
		// IF USER CLICKS LOGIN THEIR USERID IS SET TO UNDEFINED
		// AND THEY ARE SENT BACK TO LOGIN
		console.log($cookies.userId);
		$cookies.userId = undefined;
		console.log($cookies.userId);
		window.location = '#/';
	}
	// IF THE USER HAS NO USERID THEN THEY ARE SENT BACK TO LOGIN
	if($cookies.userId == undefined){
		window.location = "#/";
	}
});