Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:new, :create, :update]
    resources :stories, only: [:create, :show, :index, :update, :destroy]
      resources :likes, only: [:create, :destroy]
    resources :comments, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resource :favorites, only: [:create, :destroy]
  end
end
