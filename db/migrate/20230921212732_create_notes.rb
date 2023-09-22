class CreateNotes < ActiveRecord::Migration[7.0]
  def change
    create_table :notes do |t|
      t.integer :user_id
      t.integer :contact_id
      t.boolean :pinned
      t.string :header
      t.string :type
      t.string :prompt
      t.text :body

      t.timestamps
    end
  end
end
