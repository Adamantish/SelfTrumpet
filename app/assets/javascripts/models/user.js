
app.models.User = Backbone.Model.extend({

  localStorage: new Backbone.LocalStorage('user'),

  initialize: function() {
    this.projects = new app.collections.ProjectList();
    this.projects.user = this;
    this.bind('sync', this.fetchProjects);

  },

  fetchProjects: function(){
    if(this.id){
      this.projects.fetch();
      this.projects.reset(this.projects.where({ user_id: this.id }));
    };
  },

  fullName: function(){
    return this.get('firstName') + " " + this.get('lastName');
  },

  // defaults: {
  //   image_url: "../app/assets/images/yourface.png",
  //   firstName: "First Name",
  //   lastName: "Last Name",
  //   firstName: "First Name",
  //   mission: "Your Mission"
  // },


  validate: function(attributes){    
    var errors = {
      full_messages: []
    };

    if(!attributes.firstName) errors.full_messages.push("The Man/Woman/Transgender With No Christian Name")
    if(!attributes.lastName) errors.full_messages.push("The Man/Woman/Transgender With No Surname")
    if(!attributes.bio) errors.full_messages.push("Get a life")

    if(errors.full_messages.length > 0) return errors
  }
});