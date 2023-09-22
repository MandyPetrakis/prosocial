class CreateContactSocials < ActiveRecord::Migration[7.0]
  def change
    create_table :contact_socials do |t|
      t.integer :contact_id
      t.string :url
      t.string :type

      t.timestamps
    end
  end
end
