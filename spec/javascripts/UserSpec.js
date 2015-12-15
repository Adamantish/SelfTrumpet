

describe("User model", function() {
  var adam;
  var someoneElse;

  beforeEach(function(){
    adam = new app.models.User({
      name: "Adam",
      firstName: "Adam",
      lastName: "Misrahi",
      bio: "(In production)",
      imageUrl: "https://media.licdn.com/mpr/mpr/shrink_200_200/p/3/005/05e/1be/1b1fdf1.jpg",
      mission: "To tesco"
    });

  });

  it("can contenate to a fullName", function(){
    
    expect(adam.fullName()).toEqual("Adam Misrahi")
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
    expect(_.indexOf(messages, "The Man/Woman/Transgender With No Surname")).toNotEqual(-1)
    expect(_.indexOf(messages, "Get a life")).toNotEqual(-1)

    // make it valid
    nameless.set("firstName", "Mr Person")
    nameless.set("lastName", "Mr Person")
    nameless.set("bio", "Well, it's a life")
    expect(nameless.isValid()).toEqual(true)
  });

  it("has a cid but not an id", function(){
    expect(adam.cid).toBeDefined();
    expect(adam.id).toBeUndefined();
  });

  describe("when persisted", function() {
    var success;
    var error;

    beforeEach(function(){
      jasmine.Ajax.install(); 

      successSpy = jasmine.createSpy("success")    
      errorSpy = jasmine.createSpy("error")    

    });

    afterEach(function(){
      jasmine.Ajax.uninstall();      
    });

    it("should make a POST request to /users", function(){

      adam.save(adam.toJSON(), {
        success: successSpy,
        error: errorSpy
      });

      var request = jasmine.Ajax.requests.mostRecent();
      expect(request.method).toBe("POST");
      expect(request.url).toBe("/users");
      expect(request.data()).toEqual(adam.toJSON());

      var responseFromApi = {
        status: 201,
        responseText: JSON.stringify({
          id: 1,       
          name: "Adam",
          firstName: "Adam",
          lastName: "Misrahi",
          bio: "(In production)",
          imageUrl: "https://media.licdn.com/mpr/mpr/shrink_200_200/p/3/005/05e/1be/1b1fdf1.jpg",
          mission: "To tesco"
        })
      };

      request.respondWith(responseFromApi);

      expect(successSpy).toHaveBeenCalled();
    });

    describe('projects', function(){
      beforeEach(function(){


        someoneElse = new app.models.User({
          id: 2,
          name: "Guy",
          firstName: "Guy",
          lastName: "Mann",
          bio: "(In production)",
          imageUrl: "https://media.licdn.com/mpr/mpr/shrink_200_200/p/3/005/05e/1be/1b1fdf1.jpg",
          mission: "To tesco"
        });

        someoneElse.projects.create({

            title: "Another Project",
            imageUrl: "dsdfs.jpg",
            projectUrl: "thing.com/thingy",
          }, 
          {
            success: successSpy,
            error: errorSpy
          }
        );

        duckHash = {
          title: "Demon Duck Hunt",
          imageUrl: "thething.jpg",
          projectUrl: "place.com/wah"
        };

        someoneElse.projects.create( duckHash );

      });

      it("makes a POST request to /projects with ", function(){

        var request = jasmine.Ajax.requests.mostRecent();
        expect(request.method).toBe("POST");
        expect(request.url).toBe("/projects");
        // TODO: Add test for request body

        expect(request.data()).toBe(someoneElse.projects.first().toJSON());
      });

      it("should retrieve the project associated with the user", function(){
        
        debugger;
        var responseFromApi = {
          status: 201,
          responseText: JSON.stringify({
            id: 1,       
            name: "Adam",
            firstName: "Adam",
            lastName: "Misrahi",
            bio: "(In production)",
            imageUrl: "https://media.licdn.com/mpr/mpr/shrink_200_200/p/3/005/05e/1be/1b1fdf1.jpg",
            mission: "To tesco",
            projects: [ duckHash ]
            })
        };

        debugger;
        var reloadedUser = new app.models.User({ id: adam.id });
        reloadedUser.fetch();

        var userFetch = jasmine.Ajax.requests.mostRecent();

        expect(userFetch.method).toBe("GET");
        // expect(userFetch.url).toBe("/users/1");

        userFetch.respondWith(responseFromApi)

        // expect(userFetch.responseText).toBe(responseFromApi.responseText)
        
        expect(reloadedUser.projects.length).toBe(1);
        // expect(reloadedUser.projects.first().get('title')).toBe('Demon Duck Hunt');
        // expect(reloadedUser.projects.first().get('imageUrl')).toBe('thething.jpg');
        // expect(reloadedUser.projects.first().get('projectUrl')).toBe('place.com/wah');
      });

      describe("projects nested in users", function(){

        it("should ", function(){
          expect
        });
  
      });

    });
  });

});

