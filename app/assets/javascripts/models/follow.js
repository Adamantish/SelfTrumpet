
app.models.Follow = Backbone.Model.extend({

  defaults: {
    // temporary default
    followeeId: 2
  },

  url: "http://localhost:9292/users/1/follow",

  toJSON: function() {
    return {
      followee_id : this.get("followeeId")
    }
  }

});