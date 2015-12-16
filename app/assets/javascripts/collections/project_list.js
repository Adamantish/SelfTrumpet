app.collections.ProjectList = Backbone.Collection.extend({

  model: app.models.Project,

  // localStorage: new Backbone.LocalStorage('portfolio'),

  urlRoot: '/projects',
  
  initialize: function() {
    this.bind("add", this.setUserId);

  },

  setUserId: function(projects) {
    if(!projects.id) {
      projects.set('user_id', this.user.id)
    };
  }

});