app.views.UserListView = Backbone.View.extend({

  id: 'user-list',
  tagName: 'ol',

  template: JST['templates/users/showThin'],

  events: {
    'click .user': 'show'
  },


  render: function(){

    var _this = this;
    
    this.collection.each(function(user){
      _this.$el.append(_this.template({ user: user }));
    });

    return this;
  }

});