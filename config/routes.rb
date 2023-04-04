Rails.application.routes.draw do
  resources :states
  root 'maps#show'
end
