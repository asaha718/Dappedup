Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :update, :show]
    resource :session, only: [:create, :destroy]
    resources :posts, only: [:index, :create, :update, :show, :destroy]
    resources :educations, only: [:index, :create, :update, :show]
  end 
  
  root "static_pages#root"
end
