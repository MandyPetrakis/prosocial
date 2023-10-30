class User < ApplicationRecord
    has_secure_password 

    validates :first_name, :last_name, presence: true, length: {maximum: 100}
    validates :email, presence: true, uniqueness: true, format: {with:URI::MailTo::EMAIL_REGEXP}, length: {maximum: 30}
    # validates :phone_number,:presence => true, length: { :minimum => 10, :maximum => 15 }
    validates :password, length: {in: 3..30, :on =>:create}

    has_many :contacts, dependent: :destroy


def tag_types
   tags = self.contacts.collect {|c| c.tags}
   tag_flattened = tags.flatten
   tag_types = tag_flattened.collect {|t| t.tag_type}
   tag_types.uniq
end

def tag_list
   tags = self.contacts.collect {|c| c.tags}    
   tags.flatten.uniq
end

end
