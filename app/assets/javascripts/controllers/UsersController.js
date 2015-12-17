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

     // TODO: work this into a new view
    
    app.instancesCache.follows = new app.collections.Follows();
    app.instancesCache.follows.fetch()
    // Need to wait for this one ^ to finish before moving on. 
    // Incidentally happens to work out ok most times but not all
    app.instancesCache.followers = new app.collections.Followers();
    
    var users = new app.collections.UserList();
    users.fetch({
      success: function(users){
        
        var userListView = new app.views.UserListView({ collection: users });
        var followersView = new app.views.UserListView({ collection: app.instancesCache.followers});

        var $users = userListView.render().$el;
        var $followers = followersView.render().$el;

        
        var pageTemplate = JST['templates/users/index'];
        $('#content').html(pageTemplate({ users: $users.html() , followers: $followers.html() }));
      }
    });
  }

});