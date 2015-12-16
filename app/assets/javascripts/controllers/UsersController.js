app.controllers.UsersController = Backbone.Router.extend({

  routes: {
    'users/:id': 'show',
    'users': 'index'
  },


  show: function(id){

    // model
    var user = new app.models.User({ id: id });
    user.fetch({
      success: function() {
        var view = new app.views.UserView({ model: user })
        $('#content').html(view.render().el)
      }
    });
  },

  index: function(){

    // Model    
    var users = new app.collections.UserList();
    users.fetch({
      success: function(users){

        var userListView = new app.views.UserListView({ collection: users });
        var $list = userListView.render().$el;
        var pageTemplate = JST['templates/users/index'];
        $('#content').html(pageTemplate({ list: $list.html() }));
      }
    });


    
  }

});