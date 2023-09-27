class ContactPhoneNumberSerializer < ActiveModel::Serializer
  attributes :contact_id, :phone_number, :phone_number_type
end
