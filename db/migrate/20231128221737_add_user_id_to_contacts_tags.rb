class AddUserIdToContactsTags < ActiveRecord::Migration[7.0]
  def change
    add_column :contacts_tags, :user_id, :integer

  end
end
