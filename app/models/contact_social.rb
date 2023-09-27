class ContactSocial < ApplicationRecord
    validates :url, :social_type, :contact_id, presence: true
    belongs_to :contact
end
