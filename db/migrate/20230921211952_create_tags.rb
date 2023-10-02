class CreateTags < ActiveRecord::Migration[7.0]
  def change
    create_table :tags do |t|
      t.integer :user_id
      t.string :description
      t.string :tag_type

      t.timestamps
    end
  end
end
