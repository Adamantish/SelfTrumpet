app.views.UserView = Backbone.View.extend({

  tagName: 'div',
  className: "container__bio",
  id: "user",
  template: _.template($('#user-template').html()),
  events: {
    'dblclick .editable': 'toggleVisible',
    'blur .edit-me': 'updateElement',
    'change .edit-me': 'updateElement'

  },

  render: function() {
    this.$el.html(this.template(this.model));
    this.$el = $(editable.makeInputBoxes(this))
    this.listenTo(this.model, "change", this.render);
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

