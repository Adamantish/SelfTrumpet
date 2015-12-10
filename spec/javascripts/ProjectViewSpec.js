describe("ProjectListView", function(){

  beforeEach(function(){
    adam = new app.models.User({
      name: "Adam",
      firstName: "Adam",
      lastName: "Misrahi",
      bio: "(In production)",
      imageUrl: "https://media.licdn.com/mpr/mpr/shrink_200_200/p/3/005/05e/1be/1b1fdf1.jpg",
      mission: "To LIDL and beyond" 
    });

    adam.save();

    
    
    var duck = adam.projects.create({
      title: "Demon Duck Hunt",
      imageUrl: "thething.jpg",
      projectUrl: "place.com/wah"
    });

    view = new app.views.ProjectView({ model: duck});
  });

  it("removes the project", function() {
    $('.remove-project')
  });

});