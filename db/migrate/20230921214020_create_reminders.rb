class CreateReminders < ActiveRecord::Migration[7.0]
  def change
    create_table :reminders do |t|
      t.integer :user_id
      t.integer :contact_id
      t.string :description
      t.datetime :due_date
      t.integer :date_id
      t.boolean :recurring
      t.integer :recurring_cadence

      t.timestamps
    end
  end
end
