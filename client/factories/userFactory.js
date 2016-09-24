console.log('User Factory');

app.factory('userFactory', function($http){

	function UserFactory(){
		
		this.login = function(object, callback){
			$http.post('/users', object)
			.then(function(returned_data){
				if(typeof(callback) == 'function'){
					callback(returned_data.data);
				}
			})
		}
		this.getUser = function(id, callback){
			// console.log(id);
			$http.post('/user', {userId:id})
			.then(function(returned_data){
				if(typeof(callback) == 'function'){
					callback(returned_data.data)
				}
			})
		}
		// this.getUsers = function(callback){
		// 	$http.get('/users').then(function(success, err){
		// 		if(err){
		// 			console.log('error: ',err);
		// 		} else {
		// 			callback(success.data);
		// 		}
		// 	})
		// }
	}
	return new UserFactory();
})