var Editable = function(){};

Editable.makeInputBoxes = function(view) {

  var $el = view.$el
  var editClass = (view.el.id || view.el.className) + "__edit-me"
  var model = view.model


  var template = _.template("<input data-attributes='<%= field %>' class='<%= field %> <%= editClass %> hidden-edit' value='<%= value %>'>")

  var editables = $el.find('.editable');
  _.each(editables, function(editable){

    var field = $(editable).attr('data-attributes');
    var value = "";

    if( field ){
      value = model.get(field);
      var editBox = template({ field: field, value: value, editClass: editClass });
      $(editable).after(editBox);
    };
  });

  return $el

};
