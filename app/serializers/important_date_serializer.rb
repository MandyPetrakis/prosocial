class ImportantDateSerializer < ActiveModel::Serializer
  attributes :id, :contact_id, :important_date_type, :date
end
