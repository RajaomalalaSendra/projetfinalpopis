Rails.application.routes.draw do
  devise_for :users
  root to: 'appointments#index'
  resource 'appointments'
end