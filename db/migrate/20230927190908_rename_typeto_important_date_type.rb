class RenameTypetoImportantDateType < ActiveRecord::Migration[7.0]
  def change
    rename_column :important_dates, :type, :important_date_type
  end
end
