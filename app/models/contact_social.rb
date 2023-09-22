class ContactSocial < ApplicationRecord
    validates :url, :type, :contact_id, presence: true
    belongs_to :contact
end
