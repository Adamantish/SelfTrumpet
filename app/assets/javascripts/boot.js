// Now we're ready to go... load up a list of projects
//
$(document).ready(function() {

  Backbone.history.start();
  var usersController = new app.controllers.UsersController();
  
  usersController.navigate("users", { trigger : true });

  // temporary hardcode

  app.instancesCache.currentUser = new app.models.User({ id: 1 })
  // this has exposed a problem in fetching single users
  app.instancesCache.currentUser.fetch();

  // var dummyFollow = new app.models.Follow;

  // dummyFollow.save();
});