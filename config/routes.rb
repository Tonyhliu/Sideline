Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:new, :create]
    resource :session, only: [:create, :destroy, :show]
    resources :stories, only: [:create, :show, :index, :update, :destroy]
    resources :comments, only: [:create]
  end
end
