app.views.UserView = Backbone.View.extend({

  tagName: 'div',
  className: "container__bio",
  id: "user",
  template: JST['templates/users/show'],
  // template: _.template($('#user-template').html()),
  events: {
    'dblclick .editable': 'toggleVisible',
    'blur .edit-me': 'updateElement',
    'change .edit-me': 'updateElement'

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
  }

});

