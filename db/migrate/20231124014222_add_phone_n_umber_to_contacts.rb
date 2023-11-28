class AddPhoneNUmberToContacts < ActiveRecord::Migration[7.0]
  def change
    add_column :contacts, :phone_number, :string
  end
end
