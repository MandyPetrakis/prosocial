class User < ApplicationRecord
    has_secure_password 

    validates :first_name, :last_name, :address, presence: true, length: {maximum: 100}
    validates :email, presence: true, uniqueness: true, format: {with:URI::MailTo::EMAIL_REGEXP}, length: {maximum: 30}
    validates :phone_number,:presence => true, numericality: true, length: { :minimum => 10, :maximum => 15 }
    validates :password, length: {in: 3..30, :on =>:create}

    has_many :contacts, dependant: :destroy
    has_many :interactions, dependant: :destroy
    has_many :notes, dependant: :destroy
    has_many :reminders, dependant: :destroy
    has_many :important_dates, dependant: :destroy
    has_many :tags, dependant: :destroy
    has_many :important_dates, dependant: :destroy

end
