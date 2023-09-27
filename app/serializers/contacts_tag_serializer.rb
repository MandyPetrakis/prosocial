class ContactsTagSerializer < ActiveModel::Serializer
  attributes :id, :tag_id, :contact_id
end
