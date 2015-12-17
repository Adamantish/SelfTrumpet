app.collections.ProjectList = Backbone.Collection.extend({

  model: app.models.Project,

  // localStorage: new Backbone.LocalStorage('portfolio'),

  urlRoot: '/projects',
  
  initialize: function() {
    this.bind("add", this.setUserId);

  },

  setUserId: function(project) {
    if(!project.id) {
      project.set('user_id', this.user.id)
    };
  }

});