describe("Follow Model", function(){

  // var success;
  // var error;

  // beforeEach(function(){
  //   jasmine.Ajax.install(); 

  //   successSpy = jasmine.createSpy("success")    
  //   errorSpy = jasmine.createSpy("error")    

  // });

  // afterEach(function(){
  //   jasmine.Ajax.uninstall();      
  // });

  beforeEach(function(){
    var currentUserId = app.instancesCache.currentUser.get("id")
    newFollow = new app.models.Follow();
  });

  // making this test helped me figure out the design but it won't pass until I work in ajax mocking.
  it("can follow a user with POST", function(){

    
    newFollow.set("followeeId", 3)
    newFollow.save();
    
    expect(newFollow.attributes.followerId).toBe(1);
  });

  describe("getCalcAttribute", function(){
    it("can request a calculated attribute and return a value based on model state", function(){
      expect(newFollow.getCalcAttribute("btnText")).toEqual("Follow")
      expect(newFollow.getCalcAttribute("btnClass")).toEqual("btn--follow")

      newFollow.set("followeeId",2)

      expect(newFollow.getCalcAttribute("btnText")).toEqual("Unfollow")
      expect(newFollow.getCalcAttribute("btnClass")).toEqual("btn--unfollow")

    });
  });
});