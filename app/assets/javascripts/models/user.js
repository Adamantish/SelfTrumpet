
app.models.User = Backbone.Model.extend({

  // localStorage: new Backbone.LocalStorage('users'),

  urlRoot: '/users',
  
  initialize: function() {
    this.projects = new app.collections.ProjectList();
    this.projects.user = this;
    this.follow = new app.models.Follow();
    this.follow.user = this;
    this.follow.fetch();
  },

  parse: function(response) {
    if(!this.projects){ 
      this.projects = new app.collections.ProjectList();
    };
    this.projects.reset(response.projects)
    return response;
  },

  fullName: function(){
    return this.get('firstName') + " " + this.get('lastName');
  },

  // defaults: {
  //   imageUrl: "../app/assets/images/yourface.png",
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
  },

  toJSON: function(){
    return {
      id: this.id,
      first_name: this.get('firstName'),
      last_name: this.get('lastName'),
      bio: this.get('bio'),
      mission: this.get('mission'),
      image_url: this.get('imageUrl')
    };
  }

  
});