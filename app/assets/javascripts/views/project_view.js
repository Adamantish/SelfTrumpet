app.views.ProjectView = Backbone.View.extend({

  tagName: 'div',
  className: 'project',
  template: JST['templates/projects/show'],

  events: {  
    'dblclick .editable': 'toggleVisible',
    // 'blur .edit-me': 'updateElement',
    'change .project__edit-me': 'updateElement'
  },

  initialize: function(){
    this.listenTo(this.model, "change", this.render);
  },

  render: function() {
    this.$el.html(this.template({ project: this.model }));
    Editable.makeInputBoxes(this);
    return this;
  },


  removeProject: function(){
    
  },

  toggleVisible: function(e){
    $(e.currentTarget).hide()
    $(e.currentTarget).next().show()
  },

  updateElement: function(e){
    debugger;
    var $el = $(e.currentTarget)
    var newVal = $el.val().trim();
    var field = $el.data("attributes")
    this.model.set(field, newVal);
    this.model.save();
  }

});