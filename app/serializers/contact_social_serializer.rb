class ContactSocialSerializer < ActiveModel::Serializer
  attributes :id, :url, :social_type, :contact_id
end
