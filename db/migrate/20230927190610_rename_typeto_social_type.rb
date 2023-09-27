class RenameTypetoSocialType < ActiveRecord::Migration[7.0]
  def change
    rename_column :contact_socials, :type, :social_type
  end
end
