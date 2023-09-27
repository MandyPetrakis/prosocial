class Interaction < ApplicationRecord
    validates :interaction_type, :user_id, :contact_id, :date, presence: true
    
    belongs_to :user
    belongs_to :contact
end
