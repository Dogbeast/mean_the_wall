console.log('Message Factory');

app.factory('messageFactory', function($http){

	function MessageFactory(){
		this.getAllMessages = function(callback){
			// SENDS A GET REQUEST TO THE SERVER AND GETS RETURNEDDATA BACK
			$http.get('/messages').then(function(returnedData){
				// SENDS RETURNEDDATA BACK TO THE CONTROLLER
				callback(returnedData.data);
			})
		}
		this.createMessage = function(message, category, userId, callback){
			// SENDS THE MESSAGE TEXT AND USER ID TO SERVER
			$http.post('/messages', {text:message, cat:category, id:userId})
			.then(function(returnedData){
				// GETS DATA BACK AND RETURNS IT TO THE CONTROLLER
				callback(returnedData.data);
			}, function(error){
				console.log('error: ', error);
			})
		}
		this.createComment = function(commentText, messageId, userId, callback){
			$http.post(('/comments'), {comment:commentText, _user:userId, _message:messageId})
			.then(function(returnedData){
				// GETS DATA BACK AND RETURNS IT TO THE CONTROLLER
				callback(returnedData.data);
			}, function(error){
				console.log('error: ', error);
			})
		}
		this.getMessage = function(id, callback){
			// console.log(id)
			$http.post(('/message'), {messageId:id})
			.then(function(returnedData){
				callback(returnedData.data);
			}, function(error){
				console.log('error: ', error);
			})
		}
	}
	return new MessageFactory();
})