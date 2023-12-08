class Contact < ApplicationRecord
    validates :first_name, presence: true, unless: -> (contact) {contact.last_name.present?}
    validates :last_name, presence: true, unless: -> (contact) {contact.first_name.present?}
    validates :email, format: {with:URI::MailTo::EMAIL_REGEXP}, length: {maximum: 30}, allow_blank: true

    belongs_to :user
    has_many :contacts_tags
    has_many :tags, through: :contacts_tags

    def uniq_tags 
        self.tags.uniq
    end

end

