class CreateInteractionContacts < ActiveRecord::Migration[7.0]
  def change
    create_table :interaction_contacts do |t|
      t.integer :contact_id
      t.integer :interaction_id

      t.timestamps
    end
  end
end
