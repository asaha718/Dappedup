Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create, :update, :show, :destroy]
    resource :session, only: [:create, :destroy]
  end 
  
  root "static_pages#root"
end
