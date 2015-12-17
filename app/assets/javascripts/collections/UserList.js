app.collections.UserList = Backbone.Collection.extend({

  model: app.models.User,

  // localStorage: new Backbone.LocalStorage('users')
  url: '/users',

  initialize: function() {
    this.bind("add", this.copyToFollows);
  },

  copyToFollows: function(user){
    followerIds = app.instancesCache.follows.index

    if(followerIds[user.id]){
      app.instancesCache.followers.add(user)
    };
  }
  
});