console.log('server/models/comment.js is running');

var mongoose = require('mongoose');

var commentSchema = new mongoose.Schema({
	comment: {type: String, required: true},
	_user: {type: mongoose.Schema.ObjectId, ref: 'User'},
	_message: {type: mongoose.Schema.ObjectId, ref: 'Message'}
});

mongoose.model("Comment", commentSchema);