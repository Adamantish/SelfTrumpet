app.views.UserListView = Backbone.View.extend({

  id: 'user-list',
  tagName: 'ol',


  render: function(){
    var _this = this;

    this.collection.each(function(user){
      debugger;
      var userItemView = new app.views.UserListItemView({ model: user})
      _this.$el.append(userItemView.render().el);
    });
    return this;
  }

});