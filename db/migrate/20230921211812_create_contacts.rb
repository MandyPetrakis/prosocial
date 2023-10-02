class CreateContacts < ActiveRecord::Migration[7.0]
  def change
    create_table :contacts do |t|
      t.integer :user_id
      t.string :relationship
      t.string :company
      t.string :industry
      t.datetime :last_interaction
      t.integer :follow_up_cadence
      t.string :email

      t.timestamps
    end
  end
end
