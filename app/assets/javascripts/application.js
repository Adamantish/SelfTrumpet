var bucket_list = new app.models.Project({
  title: "Bucketlist",
  url: "https://github.com/dmgarland/BucketListApp",
  body: "<p>I worked on a Rails application that created a todo list of things I want to do before I die.</p> <ul> <li>I integrated Google maps and used Geocoding to determine where my activities would take place.</li> <li>I used AJAX to asynchronously update markers on the map when the center changed.</li> <li>I displayed crime statistics on a chart using an API call and Morris.js</li> </ul>"
});

var view = new app.views.ProjectView({ model: bucket_list });
view.render();