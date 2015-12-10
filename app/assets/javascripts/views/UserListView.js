app.views.UserListView = Backbone.View.extend({

  id: 'user-list',
  tagName: 'ol',

  template: _.template($('#user-list-item-template').html()),


  render: function(){

    debugger;
    var _this = this;

    this.collection.each(function(user){
      _this.$el.append(_this.template({ user: user }));
    });

    return this;
  }

});