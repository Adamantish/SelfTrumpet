app.views.FollowView = Backbone.View.extend({

  className: "wdg--follow",
  template: JST['templates/follows/show'],
  events: {
    "click .btn--follow": "follow",
    "click .btn--unfollow": "unfollow"
  },

  initialize: function(){
    debugger;
    var _this = this
    this.model.fetch({
      success: function() {_this.render()}
    });
  },

  follow: function(){
    this.model.save({success: this.render });
  },

  unfollow: function(){
    // destroy the saved one to send a delete request then recreate a fresh blank one
    var targetUser = this.model.user
    this.model.destroy({success: function(){
      this.model = new app.models.Follow({ user: targetUser })
      this.render();
      }
    });
  },

  render: function(){
    debugger;
    this.$el.html(this.template({ model: this.model }));
    return this;
  }

});