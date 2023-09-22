class Interaction < ApplicationRecord
    validates :type, :user_id, :contact_id, :date, presence: true
    
    belongs_to :user
    belongs_to :contact
    belong_to :note
end
