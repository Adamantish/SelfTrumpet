app.collections.Follows = Backbone.Collection.extend({

  model: app.models.Follow,
  index: {},

 url: function() { 
    var currentUser = 2
    var root = "http://localhost:9292/users/"
    return root + currentUser + "/" + "follow"    
  },

  initialize: function() {
    this.bind("add", this.addToIndex);
  },

  addToIndex: function(follow) {
    this.index[follow.id] = 1
  }

});