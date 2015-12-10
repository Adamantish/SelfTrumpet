app.models.Project = Backbone.Model.extend({

  localStorage: new Backbone.LocalStorage('projects'),

  validate: function() {
    if(!this.attributes.title) return "Title can't be blank";
    if(!this.attributes.imageUrl) return "image URL can't be blank";
    if(!this.attributes.projectUrl) return "project URL can't be blank";
    
  }

});