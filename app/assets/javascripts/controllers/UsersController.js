app.controllers.UsersController = Backbone.Router.extend({

  routes: {
    'users/:id': 'show',
    'users': 'index'
  },

  show: function(id){

    // model
    var user = new app.models.User({ id: id });
    user.fetch();

    // view
    var view = new app.views.UserView({ model: user })
    $('#content').append(view.render().el)

  },

  index: function(){
    // Model
    var users = app.views.UserList();
    users.fetch();

    // View
    var userListView = new app.views.UserListView({ collection: users });
    $('#content').html(userListView.render().el);
  }

});