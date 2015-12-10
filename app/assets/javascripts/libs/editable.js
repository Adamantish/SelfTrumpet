var Editable = function(){};

Editable.makeInputBoxes = function(view) {

  var $el = view.$el
  var model = view.model
  var template = _.template("<input data-attributes='<%= field %>' class='<%= field %> edit-me hidden-edit' value='<%= value %>'>")

  var editables = $el.find('.editable');
  _.each(editables, function(editable){

    var field = $(editable).attr('data-attributes');
    var value = "";

    if( field ){
      value = model.get(field);
      var editBox = template({ field: field, value: value });
      $(editable).after(editBox);
    };
  });

  return $el

};
