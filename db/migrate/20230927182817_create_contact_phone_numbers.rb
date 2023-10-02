class CreateContactPhoneNumbers < ActiveRecord::Migration[7.0]
  def change
    create_table :contact_phone_numbers do |t|
      t.string :contact_id
      t.string :phone_number
      t.string :phone_number_type

      t.timestamps
    end
  end
end
