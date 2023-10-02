class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :email
      t.string :password_digest
      t.string :company
      t.string :address
      t.string :phone_number
      t.string :first_name
      t.string :last_name
      t.string :focus

      t.timestamps
    end
  end
end
