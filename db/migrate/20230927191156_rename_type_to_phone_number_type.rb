class RenameTypeToPhoneNumberType < ActiveRecord::Migration[7.0]
  def change
    rename_column :contact_phone_numbers, :type, :phone_number_type
  end
end
