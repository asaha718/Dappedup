class CreateEducations < ActiveRecord::Migration[5.2]
  def change
    create_table :educations do |t|
      t.integer :user_id, null: false
      t.string :school, null: false
      t.string :field_of_study, null: false
      t.date :start_date, null: false
      t.date :end_date

      t.timestamps
    end
    add_index :educations, :user_id
  end
end
