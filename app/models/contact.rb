class Contact < ApplicationRecord
    # validates  :relationship, presence: true

    belongs_to :user
    has_many :contact_socials, dependent: :destroy
    has_many :contacts_tags
    has_many :tags, through: :contacts_tags
    has_many :contact_phone_numbers

end
