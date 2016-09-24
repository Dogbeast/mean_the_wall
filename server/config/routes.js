console.log('server/config/routes.js');
var users = require('./../controllers/users.js');
var messages = require('./../controllers/messages.js');
var comments = require('./../controllers/comments.js');

module.exports = function(app){
  app.post('/user', users.show);
  app.post('/users', users.index);
  app.get('/messages', messages.index);
  app.post('/messages', messages.create);
  app.post('/comments', comments.create);
  app.post('/message', messages.show);
  // app.get('/users', users.all);
}