require 'rails_helper'

RSpec.describe UsersController, type: :controller do
  render_views

  before do 
    3.times { @last_user = User.create!(first_name: "Adam", last_name: "Misrahi", bio: "Bio", mission: "Mission", image_url: "/uploads/me.jpg")}
  end


  describe "GET to /users" do

    it "returns a JSON array of all our users" do 

      get :index, :format => :json
      expect(response.content_type).to eq('application/json')

      users_json = JSON(response.body)
      expect(users_json.length).to eq(3)
      expect(users_json.first['id']).to_not be_nil
      expect(users_json.first['firstName']).to eq("Adam")
      expect(users_json.first['lastName']).to eq("Misrahi")
      expect(users_json.first['bio']).to eq("Bio")
      expect(users_json.first['mission']).to eq("Mission")
      expect(users_json.first['imageUrl']).to eq("/uploads/me.jpg")
    end 
  end

  describe "GET to /users/:id" do
    it "returns a JSON object of user details" do

      xhr :post, :show, id: @last_user.id

      expect(response.content_type).to eq('application/json')
      user_json = JSON(response.body)
      expect(user_json['id']).to eq(@last_user.id)
      expect(user_json['firstName']).to eq("Adam")
      expect(user_json['lastName']).to eq("Misrahi")
      expect(user_json['bio']).to eq("Bio")
      expect(user_json['mission']).to eq("Mission")
      expect(user_json['imageUrl']).to eq("/uploads/me.jpg")

    end
  end
end
