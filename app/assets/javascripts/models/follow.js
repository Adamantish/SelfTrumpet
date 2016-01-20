
app.models.Follow = Backbone.Model.extend({

  initialize: function() {
    this.getFolloweeId();
    this.on("change:user", this.getFolloweeId )
  },

  url: function() { 
    var root = "http://localhost:9292/users/"
    return root + this.user.id + "/" + "follow"    
  },

  getFolloweeId: function(){
    if(this.user){
      this.set("followeeId", this.user.get("id"));
    };
  },

  calcAttribute: function(attribute) {
    var valMap = {
      "btnClass": { "foll": "btn--unfollow",
                 "noFoll": "btn--follow"
               },
      "btnText": { "foll": "Unfollow",
                 "noFoll": "Follow"
                 }
    }

    var state = this.get("followerId") ? "foll" : "noFoll";

    return valMap[attribute][state];
  },

  toJSON: function() {
    return {
      followee_id : this.get("followeeId"),
      follower_id : this.get("followerId")
    }
  }

});