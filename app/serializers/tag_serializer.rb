class TagSerializer < ActiveModel::Serializer
  attributes :id, :description, :tag_type
end
