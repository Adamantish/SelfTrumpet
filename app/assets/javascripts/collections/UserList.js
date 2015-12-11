app.collections.UserList = Backbone.Collection.extend({

  model: app.models.User,

  // localStorage: new Backbone.LocalStorage('users')
  url: '/users'
  
});