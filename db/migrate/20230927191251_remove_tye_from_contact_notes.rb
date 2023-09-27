class RemoveTyeFromContactNotes < ActiveRecord::Migration[7.0]
  def change
    remove_column :contact_notes, :type, :string
  end
end
