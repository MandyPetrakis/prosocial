class ChangeNotesToContactNotes < ActiveRecord::Migration[7.0]
  def change
    rename_table :notes, :contact_notes 
  end
end
