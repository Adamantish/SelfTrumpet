// Now we're ready to go... load up a list of projects
//
$(document).ready(function() {

  Backbone.history.start();
  var usersController = new app.controllers.UsersController();
  
  usersController.navigate("users", { trigger : true });

  // var dummyFollow = new app.models.Follow;

  // dummyFollow.save();
});