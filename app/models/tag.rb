class Tag < ApplicationRecord
    validates :description, presence: true, length: {maximum: 30}, uniqueness: {scope: :user_id}
    validates :user_id, presence: true

    has_many :contacts_tags
    has_many :contacts, through: :contacts_tags
    belongs_to :user
end
