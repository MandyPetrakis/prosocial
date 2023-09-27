class ContactNoteSerializer < ActiveModel::Serializer
  attributes :id, :contact_id, :pinned, :header, :prompt, :body
end
