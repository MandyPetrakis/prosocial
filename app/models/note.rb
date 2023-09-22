class Note < ApplicationRecord
    validates :user_id, :contact_id, :body, presence: true 
 
    belongs_to :user
    belongs_to :contact
    has_one :interaction
end
