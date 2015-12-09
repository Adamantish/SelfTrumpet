// Now we're ready to go... load up a list of projects
//
$(document).ready(function() {
  // Try to find projects already in the local storage
  var projectList = new app.collections.ProjectList();
  projectList.fetch();

  // Create a dummy me

  var adam = new User({
    name: "Adam",
    bio: "(In production)",
    image_url: "https://media.licdn.com/mpr/mpr/shrink_200_200/p/3/005/05e/1be/1b1fdf1.jpg",
    mission: "To LIDL and beyond" 
  });

  // Create a dummy project if there isn't one already
  if(projectList.length == 0) {
    var bucket_list = projectList.create({
      title: "Bucketlist",
      url: "https://github.com/dmgarland/BucketListApp",
      body: "<p>I worked on a Rails application that created a todo list of things I want to do before I die.</p> <ul> <li>I integrated Google maps and used Geocoding to determine where my activities would take place.</li> <li>I used AJAX to asynchronously update markers on the map when the center changed.</li> <li>I displayed crime statistics on a chart using an API call and Morris.js</li> </ul>"
    });
  }
  // Put in the me dummy
  adam
  var view = new app.views.UserView({ model: adam })
  $('#backbone__user').append(view.render().el)

  // Create a blank project for us to fill in.
  projectList.add({
    title: "New Project",
    url: "Click to edit",
    body: "Click to edit"
  });

  projectList.each(function(project) {
    var view = new app.views.ProjectView({ model: project });
    $('#project-list').append(view.render().el);
  });


});