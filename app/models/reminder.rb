class Reminder < ApplicationRecord
    validates :user_id, :description, :due_date, presence: true 

    belongs_to :user
    belongs_to :contact 
    belong_to :important_date
end
