class UserSerializer < ActiveModel::Serializer
  attributes :first_name, :last_name, :email, :company, :address, :phone_number, :id
end
