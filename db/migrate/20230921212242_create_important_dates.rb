class CreateImportantDates < ActiveRecord::Migration[7.0]
  def change
    create_table :important_dates do |t|
      t.integer :contact_id
      t.integer :user_id
      t.string :type
      t.datetime :date

      t.timestamps
    end
  end
end
