class ChangeEndDate < ActiveRecord::Migration[5.2]
  def change
    remove_column :educations, :end_date
    remove_column :jobs, :end_date
    add_column :educations, :end_date, :date
    add_column :jobs, :end_date, :date
  end
end
