describe("User", function() {
  
  beforeEach(function(){
    adam = new User({
      name: "Adam",
      bio: "(In production)",
      image_url: "https://media.licdn.com/mpr/mpr/shrink_200_200/p/3/005/05e/1be/1b1fdf1.jpg",
      mission: "To tesco"
    });
  });

  it("can instantiate with some attributes", function(){
    expect(adam.get("name")).toEqual("Adam")
  });

  it("validates against a user with no name and bio",function() {
    nameless = new User();
    expect(nameless.isValid()).toBeFalsy()
    var messages = nameless.validationError.full_messages
    expect(_.indexOf(messages, "The Man/Woman/Transgender With No Name")).toNotEqual(-1)
    expect(_.indexOf(messages, "Get a life")).toNotEqual(-1)

    // make it valid
    nameless.set("name", "Mr Person")
    nameless.set("bio", "Well, it's a life")
    expect(nameless.isValid()).toEqual(true)
  });

  it("allows")
});