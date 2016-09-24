console.log('server/controller/users.js');
var mongoose = require('mongoose');
var User = mongoose.model('User');

function UsersController(){
	this.index = function(req, res){
		// console.log(req.body);
		var name = req.body.username;
		User.findOne({username:name}, function(err, found_user){
			if(err){
				res.json({error:'something wrong with the fineOne method'});
			} else {
				// console.log('after find function')
				if(found_user == null){
					var person = new User({username:name});
					person.save(function(err, success){
						if(err){
							res.json("creating new user didn't work!");
						} else {
							// console.log('after save function')
							// console.log(success._id);
							req.session.userId = success._id;
							// console.log(req.session.userId);
							res.json(success);
						}
					})
				} else {
					// console.log('found the user: ', found_user);
					req.session.userId = found_user._id;
					// console.log(req.session.userId);
					res.json(found_user);
				}
			}
		})
	};
	this.show = function(req, res){
		console.log('server controller: ',req.body.userId);
		// res.json({success:'heyo'});
		User.findOne({_id:req.body.userId}, function(err, person){
			if(err){
				console.log(err);
			} else {
				res.json(person);
			}
		})

	}
	// this.all = function(req, res){
	// 	User.find({}, function(err, person){
	// 		if(err){
	// 			console.log(err);
	// 		} else {
	// 			console.log(person)
	// 			res.json(person);
	// 		}
	// 	})
	// }
}

module.exports =  new UsersController();