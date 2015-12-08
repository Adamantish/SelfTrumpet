app.models.Project = Backbone.Model.extend({

  localStorage: new Backbone.LocalStorage('portfolio'),

  validate: function() {
    if(!this.attributes.url) return "URL can't be blank";
    if(!this.attributes.title) return "Title can't be blank";
  }

});