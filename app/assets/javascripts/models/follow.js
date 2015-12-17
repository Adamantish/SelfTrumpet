
app.models.Follow = Backbone.Model.extend({

  initialize: function() {
    this.syncMyAttributes();
    // var _this = this
    this.on("change:user", this.syncMyAttributes )
  },

  url: function(){ 
    var root = "http://localhost:9292/users/"
    return root + this.get('followeeId') + "/" + "follow"    
  },

  syncMyAttributes: function(){
    if(this.user){
      this.set("followeeId", this.user.get("id"));
    };
  },

  toJSON: function() {
    return {
      followee_id : this.get("followeeId"),
      follower_id : this.get("followerId")
    }
  }

});