class AddOccupationToContacts < ActiveRecord::Migration[7.0]
  def change
    add_column :contacts, :occupation, :string
  end
end
