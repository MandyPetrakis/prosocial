class ContactsTag < ApplicationRecord
    validates :contact_id, :tag_id, presence: true

    belongs_to :contact
    belongs_to :tag 
end
