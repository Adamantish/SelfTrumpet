app.views.ProjectView = Backbone.View.extend({

  tagName: 'div',
  className: 'project',
  template: _.template($('#project-template').html()),
  events: {
    'dblclick .project-name': 'editProjectName',
    'keypress .edit-title': 'updateTitle'
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },

  editProjectName: function() {
    this.$el.addClass('editing');
    this.$el.find('.edit-title').show().focus().prev('h3').hide();
  },

  updateTitle: function() {
    var new_title = this.$el.find('.edit-title').val().trim();
    if(event.which !== 13 || !new_title) {
      return;
    }

    this.model.set('title', new_title);
    this.model.save();
    this.$el.find('.edit-title').val('').hide().prev('h3').show().html(new_title);
  }
});