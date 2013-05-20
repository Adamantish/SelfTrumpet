app.views.ProjectView = Backbone.View.extend({

  tagName: 'div',
  className: 'project',
  template: _.template($('#project-template').html()),

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});