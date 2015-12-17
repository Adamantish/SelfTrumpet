app.views.FollowView = Backbone.View.extend({

  className: "wdg--follow",
  template: JST['templates/follows/show'],

  render: function(){
    debugger;
    this.$el.html(this.template(this));
    return this;
  }

});