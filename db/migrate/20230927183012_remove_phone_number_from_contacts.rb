class RemovePhoneNumberFromContacts < ActiveRecord::Migration[7.0]
  def change
    remove_column :contacts, :phone_number, :string
  end
end
