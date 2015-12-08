// Global variables and initialisation goes here

var adam = new User({
    name: "Adam",
    bio: "(In production)",
    image_url: "https://media.licdn.com/mpr/mpr/shrink_200_200/p/3/005/05e/1be/1b1fdf1.jpg",
    mission: "To LIDL and beyond" 
  });

// An object to group all of the Backbone objects together
var app = app || {
  models: {},
  views: {},
  collections: {}
};