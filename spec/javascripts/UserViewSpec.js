describe("User View", function () {
  var View

  beforeEach(function(){
    var adam = new User({
      name: "Adam",
      bio: "(In production)",
      image_url: "https://media.licdn.com/mpr/mpr/shrink_200_200/p/3/005/05e/1be/1b1fdf1.jpg",
      mission: "To LIDL and beyond" 
    });

    debugger;
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
      expect(view.$el.find(".h1").html()).toMatch(/Adam/)
    });

    it("should display the user's bio", function(){
      expect(view.$el.find(".h2").html()).toMatch(/in production/)
    });

    it("should display the user's mission", function(){
      expect(view.$el.find(".h3").html()).toMatch(/LIDL/)
    });
  });

  
});