app.views.UserView = Backbone.View.extend({

  tagName: 'div',
  className: "container__bio user",
  id: "user",
  template: JST['templates/users/show'],
  // template: _.template($('#user-template').html()),
  events: {
    'dblclick .editable': 'toggleVisible',
    'dblclick .uploadable': 'toggleVisible',
    'blur .user__edit-me': 'updateElement',
    'change .user__edit-me': 'updateElement',
    'change .file-input': 'uploadFile'
  },

  initialize: function(){
    this.listenTo(this.model, "change:firstName change:lastName change:bio change:mission", this.render);
  },

  render: function() {
    this.$el.html(this.template(this.model));
    Editable.makeInputBoxes(this)
    
    var followView = new app.views.FollowView({ model: this.model.follow });
    var projectListView = new app.views.ProjectListView({ collection: this.model.projects });

    this.$el.append(projectListView.render().el);
    this.$el.find(".wdg--follow").html(followView.el)
    return this;
  },

  toggleVisible: function(e){
    $(e.currentTarget).hide()
    $(e.currentTarget).next().show()
  },

  uploadFile: function(e){
    
    var editBox = $(e.currentTarget)
  
    var fileData = new FormData();
    fileData.append('imageFile', editBox[0].files[0]);
    debugger;

    $.ajax({
      beforeSend: function(xhr) {
        var csrf_token = $('meta[name=csrf-token]').attr('content');
        xhr.setRequestHeader('X-CSRF-Token', csrf_token );
      },
      url: 'users/1',
      data: fileData,
      processData: false,
      contentType: false,
      type: 'PUT'
    })

    this.model.trigger("change");
  },

  updateElement: function(e){

    var $el = $(e.currentTarget)
    var field = $el.data("attributes")
    var newVal = $(e.currentTarget).val().trim();
    this.model.set(field, $el.val().trim());
    this.model.save();

  },

  // follow: function(){

  //   var follow = new app.models.Follow({ followeeId: this.model.id })
  //   follow.save({success: function(){
  //     $('.btn--follow').text('Unfollow')
  //     // TODO: change behaviour for unfollow.
  //   }});
  // }

});

