console.log('server/controller/comments.js');
var mongoose = require('mongoose');
var Comment = mongoose.model('Comment');
var Message = mongoose.model('Message');
var User = mongoose.model('User');

function CommentsController(){
	this.create = function(req, res){
		// CREATES NEW COMMENT AND SAVES IT TO THE DB
		var comment = new Comment({comment:req.body.comment, _user:req.body._user, _message:req.body._message});
		comment.save(function(err, success){
			if(err){
				res.json(err)
			} else {
				// FINDS THE USER AND UPDATES THEIR COMMENTS ARRAY
				User.findByIdAndUpdate(success._user, {$push: {_comments: success._id}}, {safe:true, upsert:true, new:true}, function(err, person){
					console.log('server comments user found and updated: ',person);
				});
				// FINDS THE MESSAGE AND UPDATES ITS COMMENTS ARRAY
				Message.findByIdAndUpdate(success._message, {$push: {_comments: success._id}}, {safe:true, upsert:true, new:true}, function(err, message){
					console.log('server comments message found and updated: ',message);
				});
				res.json(success);
			}
		})
	};
}

module.exports =  new CommentsController();