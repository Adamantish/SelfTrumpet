app.views.FollowView = Backbone.View.extend({

  className: "wdg--follow",
  template: JST['templates/follows/show'],
  events: {
    "click .btn--follow": "follow",
    "click .btn--unfollow": "unfollow"
  },

  follow: function(){
    this.model.save({success: this.render });
  },

  unfollow: function(){
    // destroy the saved one to send a delete request then recreate a fresh blank one
    var targetUser = this.model.user
    this.model.destroy();

    this.model = new app.models.Follow({ user: targetUser })
    this.render();
  },

  render: function(){
    this.model.fetch();
    this.$el.html(this.template({ model: this.model }));
    return this;
  }

});