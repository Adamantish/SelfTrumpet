describe("User View", function () {
  var View;
  var adam;

  beforeEach(function(){
    adam = new User({
      name: "Adam",
      firstName: "Adam",
      lastName: "Misrahi",
      bio: "(In production)",
      image_url: "https://media.licdn.com/mpr/mpr/shrink_200_200/p/3/005/05e/1be/1b1fdf1.jpg",
      mission: "To LIDL and beyond" 
    });

    view = new app.views.UserView({ model: adam })
  });

  it("should create a div#user", function() {
    expect(view.el.nodeName).toEqual("DIV");
    expect(view.el.id).toEqual("user");
  })

  describe("render", function(){
    var result;

    beforeEach(function(){
      result = view.render();
    });

    it("returns the view itself", function(){
      expect(result).toEqual(view);
    });

    it("should display the user's avatar", function(){
      var avatar = view.$el.find("img.bio-image");
      expect(avatar.attr('src')).toEqual("https://media.licdn.com/mpr/mpr/shrink_200_200/p/3/005/05e/1be/1b1fdf1.jpg");
      expect(avatar.attr('alt')).toEqual('Adam');
    });

    it("should display the user's name", function(){
      debugger;
      expect(view.$el.find("h1").html()).toMatch(/Adam/)
    });

    it("should display the user's bio", function(){
      expect(view.$el.find("h2").html()).toMatch(/In production/)
    });

    it("should display the user's mission", function(){
      expect(view.$el.find("h3").html()).toMatch(/LIDL/)
    });
  });

  describe("events", function(){
    
    beforeEach(function() {
      $('#fixtures').html(view.render().el);
    });

    afterEach(function() {
      $('#fixtures').html('');
    });

    describe("editing firstName", function(){
      
      var firstNameEdit;
      var rendered;

      beforeEach(function(){
        rendered = view.render()
        firstNameEdit = rendered.$el.find('.editable.firstName')
        firstNameEdit.trigger('dblclick');
      });

      it("displays an input field", function(){
        debugger;
        expect(firstNameEdit.next('input:visible').length).toBeGreaterThan(0);
      });
    });

    describe("updating firstName", function() {
      var firstNameEdit;

      beforeEach(function() {
        var rendered = view.render()
        firstNameEdit = rendered.find('.firstName.editable');
        firstNameEdit.trigger("dblclick");
        var editBox = firstNameEdit.next("input");
        editBox.val('Adam Mi').trigger('change');
      });

      it("sets first name on the user model", function(){
        expect(adam.get("firstName")).toEqual()
      });
    });    
  })


});