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
    var currentUser = 1
  });

  it("can follow a user with POST", function(){

    newFollow = new app.models.Follow();
    newFollow.set("followeeId", 3)
    newFollow.save();
    
    expect(newFollow.attributes.followerId).toBe(1);
  });
});