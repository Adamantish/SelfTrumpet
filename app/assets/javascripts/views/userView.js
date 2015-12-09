app.views.UserView = Backbone.View.extend({

  tagName: 'div',
  className: "bio",
  template: _.template($('#user-template').html()),
  events: {
    'dblclick .editable': 'editMe'
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },

  editMe: function(e){
    debugger;
    $(e.currentTarget).parent().children().toggle()
  }

});

