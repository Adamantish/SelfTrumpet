
User = Backbone.Model.extend({

  validate: function(attributes){    
    var errors = {
      full_messages: []
    };

    if(!attributes.name) errors.full_messages.push("The Man/Woman/Transgender With No Name")
    if(!attributes.bio) errors.full_messages.push("Get a life")

    if(errors.full_messages.length > 0) return errors
  }
});