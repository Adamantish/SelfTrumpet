describe("User model", function() {
  var adam;
  var someoneElse;

  beforeEach(function(){
    adam = new app.models.User({
      name: "Adam",
      firstName: "Adam",
      lastName: "Misrahi",
      bio: "(In production)",
      image_url: "https://media.licdn.com/mpr/mpr/shrink_200_200/p/3/005/05e/1be/1b1fdf1.jpg",
      mission: "To tesco"
    });
  });

  it("can instantiate with some attributes", function(){
    expect(adam.get("name")).toEqual("Adam")
  });

  it("validates against a user with no name and bio",function() {
    nameless = new app.models.User();
    nameless.set("name", "")
    nameless.set("bio", "")

    expect(nameless.isValid()).toBeFalsy()
    var messages = nameless.validationError.full_messages
    expect(_.indexOf(messages, "The Man/Woman/Transgender With No Name")).toNotEqual(-1)
    expect(_.indexOf(messages, "Get a life")).toNotEqual(-1)

    // make it valid
    nameless.set("name", "Mr Person")
    nameless.set("bio", "Well, it's a life")
    expect(nameless.isValid()).toEqual(true)
  });

  it("has a cid but not an id", function(){
    expect(adam.cid).toBeDefined();
    expect(adam.id).toBeUndefined();
  });

  describe("when persisted", function() {
    beforeEach(function(){
      adam.save();
    });

    afterEach(function(){
      localStorage.clear();
    });

    it("has a cid but not an id", function(){
      expect(adam.cid).toBeDefined();
      expect(adam.id).toBeDefined();
    });

    describe('projects', function(){
      beforeEach(function(){
        adam.projects.create({
          title: "Demon Duck Hunt",
          imageUrl: "thething.jpg",
          projectUrl: "place.com/wah"
        });

        var someoneElse = new app.models.User({
          name: "Guy",
          firstName: "Guy",
          lastName: "Mann",
          bio: "(In production)",
          image_url: "https://media.licdn.com/mpr/mpr/shrink_200_200/p/3/005/05e/1be/1b1fdf1.jpg",
          mission: "To tesco"
        });

        someoneElse.projects.create({
          title: "Another Project",
          imageUrl: "dsdfs.jpg",
          projectUrl: "thing.com/thingy"
        });

      });

      it("should store the project associated with the user", function(){
    
        var reloadedUser = new app.models.User({ id: adam.id });
        reloadedUser.fetch();
        

        expect(reloadedUser.projects.length).toBe(1);
        expect(reloadedUser.projects.first().get('title')).toBe('Demon Duck Hunt');
        expect(reloadedUser.projects.first().get('imageUrl')).toBe('thething.jpg');
        expect(reloadedUser.projects.first().get('projectUrl')).toBe('place.com/wah');
      });
    });
  });
});

