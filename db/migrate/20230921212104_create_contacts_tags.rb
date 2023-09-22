class CreateContactsTags < ActiveRecord::Migration[7.0]
  def change
    create_table :contacts_tags do |t|
      t.integer :contact_id
      t.integer :tag_id

      t.timestamps
    end
  end
end
