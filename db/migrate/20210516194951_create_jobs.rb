class CreateJobs < ActiveRecord::Migration[5.2]
  def change
    create_table :jobs do |t|
      t.integer :user_id, null: false
      t.string :title, null: false
      t.string :field, null: false
      t.string :company, null: false
      t.string :location
      t.text :discription, null: false
      t.date :start_date, null: false
      t.date :end_date

      t.timestamps
    end
    add_index :jobs, :user_id
  end
end
