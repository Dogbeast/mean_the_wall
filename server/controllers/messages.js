console.log('server/controller/messages.js');
var mongoose = require('mongoose');
var Message = mongoose.model('Message');
var User = mongoose.model('User');

function MessagesController(){
	this.index = function(req, res){
		// FINDS ALL MESSAGES AND POPULATES THEIR _COMMENTS FIELD
		// THEN IT RETURNS IT TO THE FACTORY
		Message.find({})
		.populate('_comments')
		.populate('_user')
		.exec(function(err, messages){
			if(err){
				console.log(err)
			} else {
				res.json(messages)
			}
		})
	};
	this.create = function(req, res){
		// CREATES NEW MESSAGE THEN SAVES IT
		var message = new Message({message:req.body.text, category:req.body.cat, _user:req.body.id});
		message.save(function(err, success){
			if(err){
				res.json(err);
			} else {
				// SAVED MESSAGE AND FINDS THE USER BY THEIR ID AND
				// PUSHES THE MESSAGE ID INTO THE USERS _MESSAGE ARRAY
				User.findByIdAndUpdate(success._user, {$push: {_messages: success._id}}, {safe:true, upsert:true, new:true}, function(err, person){
					res.json(person);
				});
			}
		})
	};
	this.show = function(req, res){
		Message.findOne({_id:req.body.messageId})
		.populate('_user _comments')
		.populate({path: '_comments', populate: {path: '_user'}})
		.exec(function(err, messages){
			if(err){
				console.log(err)
			} else {
				console.log(messages);
				console.log('test: ',messages._comments[0]._user.username)
				res.json(messages);
			}
		})
	}
}

module.exports =  new MessagesController();