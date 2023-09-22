Rails.application.routes.draw do
  resources :reminders
  resources :contact_socials
  resources :contacts_bridges
  resources :interaction_contacts
  resources :interactions
  resources :notes
  resources :important_dates
  resources :contacts_tags
  resources :tags
  resources :contacts
  resources :users
end
