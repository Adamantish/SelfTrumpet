describe("User list view", function(){

  var view;

  beforeEach(function(){
    var users = new app.collections.UserList([
      {
        name: "Adam",
        firstName: "Adam",
        lastName: "Misrahi",
        bio: "(In production)",
        image_url: "https://media.licdn.com/mpr/mpr/shrink_200_200/p/3/005/05e/1be/1b1fdf1.jpg",
        mission: "To tesco"

      },
      {
        name: "Guy",
        firstName: "Guy",
        lastName: "Mann",
        bio: "Babbled",
        image_url: "https://madness.jpg",
        mission: "To tesco"
      }

      ]);

    view = new app.views.UserListView({
      collection: users
    });
  }); 

  it("creates a ol#user-list", function(){
    expect(view.el.nodeName).toBe('OL');
    expect(view.el.id).toBe('user-list');
  });

  describe('render', function(){
    var result;
    beforeEach(function(){
      result= view.render();
    });

    it('returns the view', function(){
      expect(result).toEqual(view);
    });

    it("adds an li for each user", function(){
      debugger;
      expect(view.$el.find('li.user').length).toBe(2);
      expect(view.$el.find('li.user:first').html()).toMatch(/Adam Misrahi/);
      expect(view.$el.find('li.user:last').html()).toMatch(/Guy Mann/);
      // expect(view.$el.find('li.user:first').html()).toMatch(/1b1fdf1.jpg/);
      // expect(view.$el.find('li.user:last').html()).toMatch(/madness.jpg/);

    });
    

  });
});