app.views.ProjectListView = Backbone.View.extend({

  id: 'projects',
  template: JST['templates/projects/index'],

  events: {
    "click #add-project": "addProject"
  },

  initialize: function() {
    // this.listenTo(this.collection, "add", this.render);
  },

  addProject: function(){
    
    this.collection.add({});
    this.render();
    
  },

  render: function (){
    var _this = this;
    
    this.$el.html(this.template());
    this.collection.each(function(project) {
      var view = new app.views.ProjectView({ model: project });
      _this.$el.find('#project-list').append(view.render().el);
    });

    return this;
  }
})