
app.models.User = Backbone.Model.extend({

  localStorage: new Backbone.LocalStorage('user'),

  initialize: function() {
    this.projects = new app.collections.ProjectList();
    this.projects.user = this;
    this.bind('sync', this.fetchProjects);

  },

  fetchProjects: function(){
    debugger;
    if(this.id){
      this.projects.fetch();
      this.projects.reset(this.projects.where({ user_id: this.id }));
    };
  },

  defaults: {
    image_url: "assets/images/yourface.png",
    firstName: "First Name",
    lastName: "Last Name",
    bio: "Biography",
    firstName: "First Name",
  },


  validate: function(attributes){    
    var errors = {
      full_messages: []
    };

    if(!attributes.name) errors.full_messages.push("The Man/Woman/Transgender With No Name")
    if(!attributes.bio) errors.full_messages.push("Get a life")

    if(errors.full_messages.length > 0) return errors
  }
});