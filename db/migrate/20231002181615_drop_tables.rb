class DropTables < ActiveRecord::Migration[7.0]
  def change
    drop_table :contact_notes
    drop_table :important_dates
    drop_table :interaction_contacts
    drop_table :interactions
  end
end
