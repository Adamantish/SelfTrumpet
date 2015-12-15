app.views.ProjectView = Backbone.View.extend({

  tagName: 'div',
  className: 'project',
  template: JST['templates/projects/show'],

  events: {  
    'dblclick .editable': 'toggleVisible',
    // 'blur .edit-me': 'updateElement',
    'change .edit-me': 'updateElement'
  },

  initialize: function(){
    this.listenTo(this.model, "change", this.render);
  },

  render: function() {
    this.$el.html(this.template({ project: this.model }));
    Editable.makeInputBoxes(this);
    return this;
  },

  // editProjectName: function() {
  //   this.$el.addClass('editing');
  //   this.$el.find('.edit-title').show().focus().prev('h3').hide();
  // },

  // updateTitle: function(e) {
  //   var new_title = $(e.currentTarget).val().trim();
  //   this.model.set('title', new_title);
  //   this.model.save();
  // },

  removeProject: function(){
    
  },

  toggleVisible: function(e){
    $(e.currentTarget).hide()
    $(e.currentTarget).next().show()
  },

  updateElement: function(e){
    var $el = $(e.currentTarget)
    var newVal = $el.val().trim();
    var field = $el.data("attributes")
    this.model.set(field, newVal);
    this.model.save();
  }

});