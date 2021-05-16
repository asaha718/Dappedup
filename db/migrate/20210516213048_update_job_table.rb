class UpdateJobTable < ActiveRecord::Migration[5.2]
  def change
    rename_column :jobs, :discription, :description
  end
end
