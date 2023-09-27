class RemoveNoteIdFromInteraction < ActiveRecord::Migration[7.0]
  def change
    remove_column :interactions, :note_id, :integer
  end
end
