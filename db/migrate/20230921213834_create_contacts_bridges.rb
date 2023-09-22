class CreateContactsBridges < ActiveRecord::Migration[7.0]
  def change
    create_table :contacts_bridges do |t|
      t.integer :contact_id1
      t.integer :contact_id2

      t.timestamps
    end
  end
end
