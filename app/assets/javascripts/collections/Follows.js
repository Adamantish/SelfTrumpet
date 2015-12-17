app.collections.Follows = Backbone.Collection.extend({

  model: app.models.Follow,
  index: {},

  url: function(){ 
    var currentUserId = app.instancesCache.currentUser.get("id")
    var root = "http://localhost:9292/users/"
    return root + currentUserId + "/" + "followers"    
  },

  initialize: function() {
    this.bind("add", this.addToIndex);
  },

  addToIndex: function(follow) {
    this.index[follow.id] = "here"
  }

});