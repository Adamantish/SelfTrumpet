describe("FollowView", function(){

  var targetUser;
  var currentUserId;
  var followModel;

  beforeEach(function(){
    currentUserId = app.instancesCache.currentUser.get("id")

    targetUser = new app.models.User({
      id: 4,
      name: "Adam",
      firstName: "Adam",
      lastName: "Misrahi",
      bio: "(In production)",
      imageUrl: "https://media.licdn.com/mpr/mpr/shrink_200_200/p/3/005/05e/1be/1b1fdf1.jpg",
      mission: "To LIDL and beyond" 
    });

    followModel = new app.models.Follow({ user: targetUser });
    followView = new app.views.FollowView({ model: followModel });
  })

  describe("When current user is NOT following the target user", function(){

    it("should display a follow button", function(){

      followView.render();
      expect(followView.$el.find('.btn--follow').text()).toMatch(/Follow/)
    });

  });

  describe("When current user is following the target user", function(){

    it("should display an unfollow button", function(){

      followModel.set( "followeeId", targetUser.id )
      
      followView.render();
      expect(followView.$el.find('.btn--unfollow').text()).toMatch(/Unfollow/)
    });
  });
});