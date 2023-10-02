class DropContactsBridge < ActiveRecord::Migration[7.0]
  def change
    drop_table :contacts_bridges

  end
end
