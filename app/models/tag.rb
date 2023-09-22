class Tag < ApplicationRecord
    validates :description, :type, presence: true, length: {maximum: 30}
   
    has_many :contacts_tags
    has_many :contacts, through: :contacts_tags
    belong_to :user
end
