app.views.ProjectListView = Backbone.View.extend({

  id: 'projects',

  template: _.template($('#project-list-template').html()),

  render: function (){
    var  _this = this;

    this.$el.html(this.template());
    
    this.collection.each(function(project) {
      var view = new app.views.ProjectView({ model: project });
      _this.$el.find('#project-list').append(view.render().el);
    });
  }
})