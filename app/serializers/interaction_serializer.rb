class InteractionSerializer < ActiveModel::Serializer
  attributes :id, :interaction_type, :contact_id, :date, :note
end
