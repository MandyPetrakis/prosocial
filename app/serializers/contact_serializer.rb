class ContactSerializer < ActiveModel::Serializer
  attributes :id, :relationship, :company, :industry, :last_interaction, :email, :first_name, :last_name, :occupation, :tags, :contact_phone_numbers, :contact_socials
end
