console.log('server/models/user.js is running');

var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
	username: {type: String, required: true},
	_messages: [{type: String, ref: 'Message'}],
	_comments: [{type: String, ref: 'Comment'}]
});

mongoose.model("User", userSchema);