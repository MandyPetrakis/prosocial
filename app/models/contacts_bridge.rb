class ContactsBridge < ApplicationRecord
    validates :contact_id, :contact_id2, presence: true

    belongs_to :contact_id1, class_name: "Contact"
    belongs_to :contact_id2, class_name: "Contact"

end
