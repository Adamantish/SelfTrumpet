class HomeController < ApplicationController
  def index
    @templates = HomeHelper::_templates 
  end
end
