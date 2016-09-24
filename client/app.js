var app = angular.module('app', ['ngRoute', 'ngCookies']);
app.config(function ($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: './partials/login.html'
		})
		.when('/messages', {
			templateUrl: './partials/messages.html'
		})
		.when('/message/:id', {
			templateUrl: './partials/singlemessage.html'
		})
		.when('/dashboard', {
			templateUrl: './partials/dashboard.html'
		})
		.when('/user/:id', {
			templateUrl: './partials/user.html'
		})
		.otherwise({
			redirectTo: '/'
		})
});