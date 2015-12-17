
app.models.Follow = Backbone.Model.extend({


  url: function(){ 
    var root = "http://localhost:9292/users/"
    return root  + this.get('followeeId') + "/" + "follow"    
  },

  toJSON: function() {
    return {
      followee_id : this.get("followeeId")
    }
  }

});