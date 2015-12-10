
function prepareInputBoxes(model) {

    //Make a bare bones view referencing a test template
  var View = Backbone.View.extend({
    template: _.template($('#editable-spec-template').html()),

    render: function() {
      this.$el.html(this.template(this.model));
      return this;
    }
  });

  var view = new View({ model: model });
  view.render();
  Editable.makeInputBoxes(view)

  return view.$el.find("input.edit-me.hidden-edit")
};

describe("Editable", function(){

  var bareModel;
  var populatedModel;

  beforeEach(function(){
    // Make a dummy model
    Model = Backbone.Model.extend({});
  });

  describe("makeInputBoxes()", function(){

    it("should add hidden input boxes next after all elements with 'editable' class", function(){
      
      var populatedModel = new Model({ firstName: "Cyril", lastName: "Battle" });
      var $boxes = prepareInputBoxes(populatedModel)

      expect($boxes.length).toBe(2)

      // attribute name should bind to element class to pre-populate input value
      expect($boxes.first().attr("value")).toMatch(/Cyril/)
      expect($boxes.last().attr("value")).toMatch(/Battle/)

    });

    it("if attributes are missing from the model then do the same but without value", function(){
      var bareModel = new Model();
      var $boxes = prepareInputBoxes(bareModel)

      expect($boxes.length).toBe(2)
      expect($boxes.first().attr("value")).toEqual("")
      expect($boxes.last().attr("value")).toEqual("")

    });

  });
});