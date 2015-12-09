
var Editable = function(){};

var template = _.template("<input class='<%= field %> edit-me hidden' value='<%= value %>'>")

Editable.prototype.makeInputBoxes = function($el, model) {
  _.each(model.attributes, function(value, field) {
    var anchor = $el.find("." + field + ".editable");
    var editBox = template({ field: field, value: value });

    // In two minds about this wrapping element. 
    // It's only handy for toggling hidden class of the things inside.
    anchor.wrap("<div class='container__edit'></div>")
    anchor.after(editBox);
  })

  return $el

};

var editable = new Editable()