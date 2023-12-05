class TagSerializer < ActiveModel::Serializer
  attributes :id, :description, :tag_type
  has_many :contacts
end
