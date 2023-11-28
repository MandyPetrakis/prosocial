class Contact < ApplicationRecord
    validates :first_name, presence: true, unless: -> (contact) {contact.last_name.present?}
    validates :last_name, presence: true, unless: -> (contact) {contact.first_name.present?}


    belongs_to :user
    has_many :contacts_tags
    has_many :tags, through: :contacts_tags

    def uniq_tags 
        self.tags.uniq
    end

end

