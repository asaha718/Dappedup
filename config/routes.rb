Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :update, :show, :index]
    resource :session, only: [:create, :destroy]
    resources :posts, only: [:index, :create, :update, :show, :destroy]
    resources :educations, only: [:index, :create, :update, :show, :destroy]
    resources :jobs, only: [:index, :create, :update, :show, :destroy]
    resources :follows, only: [:create, :show, :destroy]
    resources :job_postings, only: [:index, :create, :update, :show, :destroy]
    resources :job_applications, only: [:create, :show]
  end 
  
  root "static_pages#root"
end
