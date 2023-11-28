class DeleteContactPhoneNumbers < ActiveRecord::Migration[7.0]
  def change
    drop_table :contact_phone_numbers
    drop_table :contact_socials

  end
end
