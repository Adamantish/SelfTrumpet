app.views.UserListItemView = Backbone.View.extend({
  className: "user",
  tagName: 'li',

  template: _.template('<%= fullName %>'),

  render: function(){
    debugger;
    this.$el.html(this.template({fullName: this.model.fullName()}));
    return this;
  }
});