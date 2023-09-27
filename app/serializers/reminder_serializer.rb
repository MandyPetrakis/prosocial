class ReminderSerializer < ActiveModel::Serializer
  attributes :contact_id, :description, :due_date, :important_date_id, :recurring, :recurring_cadence
end
