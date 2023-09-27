class User < ApplicationRecord
    has_secure_password 

    validates :first_name, :last_name, :address, presence: true, length: {maximum: 100}
    validates :email, presence: true, uniqueness: true, format: {with:URI::MailTo::EMAIL_REGEXP}, length: {maximum: 30}
    # validates :phone_number,:presence => true, length: { :minimum => 10, :maximum => 15 }
    validates :password, length: {in: 3..30, :on =>:create}

    has_many :contacts, dependent: :destroy
    has_many :interactions, dependent: :destroy
    has_many :notes, dependent: :destroy
    has_many :reminders, dependent: :destroy
    has_many :important_dates, dependent: :destroy
    has_many :tags, dependent: :destroy
    has_many :important_dates, dependent: :destroy

end
