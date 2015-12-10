describe("Editable", function(){

  var bareModel;
  var populatedModel;
  var View;

  beforeEach(function(){

    // Make a dummy model
    Model = Backbone.Model.extend({ 
      // localStorage: new Backbone.LocalStorage('testModel')
    });
    
    //Make a bare bones view referencing a template
    View = Backbone.View.extend({
      template: _.template($('#editable-spec-template').html()),

      render: function() {
        debugger;
        this.$el.html(this.template(this.model));
        return this;
      }
    });
  });

  describe("makeInputBoxes()", function(){

    beforeEach(function(){

    });

    it("should add hidden input boxes next after all elements with 'editable' class", function(){
      
      var populatedModel = new Model({ firstName: "Cyril", lastName: "Battle" });
      var view = new View({ model: populatedModel });
      var $el = view.render().$el;
    
      Editable.makeInputBoxes(view)

      var $boxes = $el.find("input.edit-me.hidden-edit")

      expect($boxes.length).toBe(2)

      // show that attribute name has bound to element class name to pre-populate input value
      expect($boxes.first().attr("value")).toMatch(/Cyril/)
      expect($boxes.last().attr("value")).toMatch(/Battle/)
    });

    it("should do this with blank values when there are not yet attributes to bind to", function(){

    });

  });
});