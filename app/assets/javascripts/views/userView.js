app.views.UserView = Backbone.View.extend({

  tagName: 'div',
  className: "container__bio",
  id: "user",
  class: "user",
  template: JST['templates/users/show'],
  // template: _.template($('#user-template').html()),
  events: {
    'dblclick .editable': 'toggleVisible',
    'blur .user__edit-me': 'updateElement',
    'change .user__edit-me': 'updateElement',
    'click #btn--follow': 'follow'

  },

  initialize: function(){
    this.listenTo(this.model, "change:firstName change:lastName change:bio change:mission", this.render);
  },

  render: function() {
    this.$el.html(this.template(this.model));
    Editable.makeInputBoxes(this)

    var projectListView = new app.views.ProjectListView({
      collection: this.model.projects
    });

    this.$el.append(projectListView.render().el);
    return this;
  },

  toggleVisible: function(e){
    $(e.currentTarget).hide()
    $(e.currentTarget).next().show()
  },

  updateElement: function(e){
    var $el = $(e.currentTarget)
    var field = $el.data("attributes")
    var newVal = $(e.currentTarget).val().trim();
    this.model.set(field, $el.val().trim());
    this.model.save();
  },

  follow: function(){
    // sidestepping backbone and pure REST here because it simplifies things, and follow model doesn't
    // need to be kept locally.

    
    var follow = new app.models.Follow({ followeeId: this.model.id })
    follow.save({success: function(){
      $('.btn--follow').text('Unfollow')
      // TODO: change behaviour for unfollow.
    }});
  }

});

