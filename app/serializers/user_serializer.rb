class UserSerializer < ActiveModel::Serializer
  attributes :first_name, :last_name, :email, :company, :address, :phone_number, :id, :focus, :tag_types, :tag_list
  has_many :contacts
end
