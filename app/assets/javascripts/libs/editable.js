
var Editable = function(){};

var template = _.template("<input data-attributes='<%= field %>' class='<%= field %> edit-me hidden-edit' value='<%= value %>'>")

Editable.prototype.makeInputBoxes = function(view) {

  var $el = view.$el
  var model = view.model

  _.each(model.attributes, function(value, field) {
    debugger;
    var anchor = $el.find("." + field + ".editable");
    var editBox = template({ field: field, value: value });

    // In two minds about this wrapping element.
    // It's only handy for toggling hidden class of the things inside.
    // UPDATE: yeah it was a bad idea. Sometimes the container needs display: inline other times not
    // anchor.wrap("<div class='container__edit' style='display:inline-block;'></div>")
    anchor.after(editBox);
  })

  return $el

};

var editable = new Editable()