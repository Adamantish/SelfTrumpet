class UsersController < ApplicationController

  def index
    @users = User.all
  end

  def show
    @user = User.find(params[:id])
  end

  def create

  end

  def update
    
    user_hash = params["user"]
    id = user_hash["id"]

    User.update(id, strong_params)

    render nothing: true
  end

  private

  def strong_params
    params.require(:user).permit(:first_name, :last_name, :bio, :mission, :image_url)
  end

end
