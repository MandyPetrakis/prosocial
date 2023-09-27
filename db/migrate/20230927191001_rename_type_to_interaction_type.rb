class RenameTypeToInteractionType < ActiveRecord::Migration[7.0]
  def change
    rename_column :interactions, :type, :interaction_type
  end
end
