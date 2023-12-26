class User < ApplicationRecord
    has_secure_password 

    validates :first_name, :last_name, presence: true, length: {maximum: 100}
    validates :email, presence: true, uniqueness: true, format: {with:URI::MailTo::EMAIL_REGEXP}, length: {maximum: 100}
    validates :password, length: {in: 3..30, :on =>:create}

    has_many :contacts, dependent: :destroy
    has_many :tags, dependent: :destroy
    has_many :contacts_tags

def user_tags 
   self.tags.uniq
end

end
