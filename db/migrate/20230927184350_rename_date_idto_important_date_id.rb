class RenameDateIdtoImportantDateId < ActiveRecord::Migration[7.0]
  def change
    rename_column :reminders, :date_id, :important_date_id
  end
end
