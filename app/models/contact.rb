class Contact < ApplicationRecord
    validates :user_id, :relationship, :company, :industry, presence: true

    belongs_to :user
    has_many :interaction_contacts, dependant: :destroy
    has_many :interactions, through: :interaction_contacts
    has_many :contact_socials, dependant: :destroy
    has_many :contacts_bridges, dependant: :destroy
    has_many :contacts_tags
    has_many :tags, through: :contacts_tags
    has_many :notes
    has_many :important_dates, dependant: :destroy
    has_many :reminders, dependant: :destroy
end
