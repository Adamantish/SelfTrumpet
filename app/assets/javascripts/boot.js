// Now we're ready to go... load up a list of projects
//
$(document).ready(function() {

  Backbone.history.start();
  var usersController = new app.controllers.UserController();
  usersController.navigate("users/1", { trigger : true })
  }

});