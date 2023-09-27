Rails.application.routes.draw do
  resources :contact_phone_numbers
  resources :reminders
  resources :contact_socials
  resources :contacts_bridges
  resources :interaction_contacts
  resources :interactions
  resources :contact_notes
  resources :important_dates
  resources :contacts_tags
  resources :tags
  resources :contacts
  resources :users
end
