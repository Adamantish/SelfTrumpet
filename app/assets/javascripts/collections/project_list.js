app.collections.ProjectList = Backbone.Collection.extend({

  model: app.models.Project,
  localStorage: new Backbone.LocalStorage('portfolio')


});