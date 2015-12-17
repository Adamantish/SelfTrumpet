Rails.application.routes.draw do
  
  root 'home#index'
  resources :home, only: [:index] 
  resources :users do
    collection do
      get :github_authorize
      get :github_oauth_callback
    end
  end

end
