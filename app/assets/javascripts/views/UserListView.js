app.views.UserListView = Backbone.View.extend({

  id: 'user-list',
  tagName: 'ol',

  template: _.template($('#user-list-item-template').html()),

  events: {
    'click .user': 'show'
  },

  render: function(){

    var _this = this;
    $("<h2>The Users</h2>").insertBefore(this.$el);

    this.collection.each(function(user){
      _this.$el.append(_this.template({ user: user }));
    });

    return this;
  }

});