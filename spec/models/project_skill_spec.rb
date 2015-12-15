require 'rails_helper'

RSpec.describe ProjectSkill, type: :model do
  
  before do 

    @skatepark = Project.create!(title: "Demon Duck Hunt",
                              image_url: "thething.jpg",
                              project_url: "place.com/wah")

    @hover = Skill.create!(name:"Hoverboarding")
    @wheel = Skill.create!(name:"PullingWheelies")
  end

  it "can add skills to itself" do

    @skatepark.skills << @hover
    @skatepark.skills << @wheel
    
  end

end
