class InteractionContact < ApplicationRecord
    validates :contact_id, :interaction_id, presence: true

    belongs_to :contact
    belongs_to :interaction

end
