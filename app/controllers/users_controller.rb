class UsersController < ApplicationController

  def index
    @users = User.all
  end

  def show
    @user = User.find(params[:id])
  end

  def github_authorize
    redirect_to oauth2_client.auth_code.authorize_url(
      redirect_uri: github_oauth_callback_users_url
    )
  end

  def github_oauth_callback
    access_token = oauth2_client.auth_code.get_token(params[:code])

    user_data = JSON(access_token.get('https://api.github.com/user').body)

    @user = User.find_or_create_by!( github_id: user_data["id"]) do |user|
      binding.pry
      names = user_data["login"].split(" ")
      user.first_name = names.first
      user.last_name = names.last
      user.bio = user_data['bio']
      user.mission = "Make #{user_data["company"]} a big success"
      user.image_url = user_data["avatar_url"]
    end

    redirect_to root_path
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

  def oauth2_client
    OAuth2::Client.new(
        Rails.application.secrets.github[:oauth2_client_id],
        Rails.application.secrets.github[:oauth2_client_secret],
        {
          site: 'https://github.com',
          authorize_url: '/login/oauth/authorize',
          token_url: '/login/oauth/access_token'
        }
      )
  end

  def strong_params
    params.require(:user).permit(:first_name, :last_name, :bio, :mission, :image_url)
  end

end
