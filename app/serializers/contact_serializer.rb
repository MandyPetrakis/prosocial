class ContactSerializer < ActiveModel::Serializer
  attributes :id, :relationship, :company, :industry, :last_interaction, :email
end
