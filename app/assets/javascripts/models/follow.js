
app.models.Follow = Backbone.Model.extend({

  initialize: function() {
    this.getFolloweeId();
    // var _this = this
    this.on("change:user", this.getFolloweeId )
  },

  url: function(){ 
    var root = "http://localhost:9292/users/"
    return root + this.get('followeeId') + "/" + "follow"    
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

    var state = this.get("followeeId") ? "foll" : "noFoll";

    return valMap[attribute][state];

  },

  toJSON: function() {
    return {
      followee_id : this.get("followeeId"),
      follower_id : this.get("followerId")
    }
  }

});