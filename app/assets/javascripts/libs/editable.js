
var Editable = function(){};

var template = _.template("<input class='<%= field %> edit-me hidden' value='<%= value %>'>")

Editable.prototype.makeInputBoxes = function($el, model) {
  _.each(model.attributes, function(value, field) {
    var anchor = $el.find("." + field + ".editable");
    var editBox = template({ field: field, value: value });
    anchor.after(editBox);
  })

  return $el

};

var editable = new Editable()