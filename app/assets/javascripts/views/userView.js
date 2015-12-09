app.views.UserView = Backbone.View.extend({

  tagName: 'div',
  className: "bio",
  template: _.template($('#user-template').html()),

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }

});

