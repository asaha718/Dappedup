Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :update, :show, :index] do 
      member do
        post :following 
      end
    end 
    resource :session, only: [:create, :destroy]
    resources :posts, only: [:index, :create, :update, :show, :destroy]
    resources :educations, only: [:index, :create, :update, :show, :destroy]
    resources :jobs, only: [:index, :create, :update, :show, :destroy]
    resources :follows, only: [:create, :show, :destroy]
  end 
  
  root "static_pages#root"
end
