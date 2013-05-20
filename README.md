# Backbone Portfolio

A little app we'll use to make a front-end rich client experience, that builds
an on-line portfolio to show off our project work.

## INSTALL

* Fork and clone this repo as per usual.
* Open in your favourite browser, using a scheme such as
file:///Users/yournamehere/projects/backbone_portfolio/public/index.html

Note that there is no rails server!

## TESTS

To run the tests, visit the jasmine script runner in your browser:

    file:///Users/yournamehere/projects/backbone_portfolio/SpecRunner.html


## TODO

* Create a User model that represents yourself.
  * Create keys for name, bio, image URL and mission.
* Add validation for the model and test that it works using Jasmine TDD
* Instantiate your user in the application.js
* Update the index.html to include the bio section in a script tag, and create a User view that replaces the values with the information in your model.
* Add events to the project view, so that you can edit all of the project features in place, and store the changes in the local store. Make sure you add some nice UX features such as fadeIn and fadeOuts, and ensure that if I click away from a text box that the value will not update.
* Create a model called Skill, with a name attribute. Add validation and tests.
* Create a collection of Skill models called Skills, and nest it within the project model. Ensure that a hard-coded set of skills dynamically appears in your project template.
* Create a SkillView for each skill in a project. Add events to allow you to dynamically add and remove a skill to a project that persists to the local store.
* Add an event to the project trashcan so that you can delete a project.
* Add code to the page so that the sorting arrow works and you can update the order of the projects.
* Amend the project model to add any other information that you see fit.
* Personalise your portfolio with CSS.
