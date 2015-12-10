app.collections.ProjectList = Backbone.Collection.extend({

  model: app.models.Project,

  localStorage: new Backbone.LocalStorage('portfolio'),

  initialize: function() {
    this.bind("add", this.setUserId);
  },

  setUserId: function(projects) {
    debugger;
    if(!projects.id) {
      projects.set('user_id', this.user.id)
    };
  }

});