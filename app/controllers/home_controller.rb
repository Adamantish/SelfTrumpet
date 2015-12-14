class HomeController < ApplicationController
  
  include HomeHelper

  def index
    @templates = HomeHelper::_templates 
  end
end
