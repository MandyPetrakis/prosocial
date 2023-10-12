class ContactSerializer < ActiveModel::Serializer
  attributes :id, :relationship, :company, :industry, :last_interaction, :email, :first_name, :last_name
end
