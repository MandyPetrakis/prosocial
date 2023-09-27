class Tag < ApplicationRecord
    validates :description, :tag_type, presence: true, length: {maximum: 30}
   
    has_many :contacts_tags
    has_many :contacts, through: :contacts_tags
    belongs_to :user
end
