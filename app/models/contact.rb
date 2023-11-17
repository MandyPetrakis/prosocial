class Contact < ApplicationRecord
    validates :first_name, presence: true, unless: -> (contact) {contact.last_name.present?}
    validates :last_name, presence: true, unless: -> (contact) {contact.first_name.present?}


    belongs_to :user
    has_many :contacts_tags
    has_many :tags, through: :contacts_tags
    has_many :contact_phone_numbers, dependent: :destroy
    has_many :contact_socials, dependent: :destroy

    private 

    def validate_first_or_last

    end


end

