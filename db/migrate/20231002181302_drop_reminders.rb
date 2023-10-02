class DropReminders < ActiveRecord::Migration[7.0]
  def change
    drop_table :reminders 
  end
end
