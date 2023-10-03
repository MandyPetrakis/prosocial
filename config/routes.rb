Rails.application.routes.draw do
  resources :contact_phone_numbers
  resources :contact_socials
  resources :contacts_tags
  resources :tags
  resources :contacts
  resources :users

  get "/me", to: "users#logged_in"
  post '/login', to: 'sessions#create'


end
