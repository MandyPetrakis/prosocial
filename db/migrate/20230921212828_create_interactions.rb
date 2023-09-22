class CreateInteractions < ActiveRecord::Migration[7.0]
  def change
    create_table :interactions do |t|
      t.string :type
      t.integer :user_id
      t.integer :contact_id
      t.datetime :date
      t.integer :note_id

      t.timestamps
    end
  end
end
