console.log('server/models/message.js is running');

var mongoose = require('mongoose');

var messageSchema = new mongoose.Schema({
	message: {type: String, required: true},
	category: {type: String, required: true},
	_user: {type: mongoose.Schema.ObjectId, ref: 'User'},
	_comments: [{type: String, ref: 'Comment'}]
});

mongoose.model("Message", messageSchema);