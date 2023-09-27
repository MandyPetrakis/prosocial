class ImportantDate < ApplicationRecord
    validates :user_id, :important_date_type, :date, presence: true

    belongs_to :user
    belongs_to :contact 
    has_many :reminders
end
