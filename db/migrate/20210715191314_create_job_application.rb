class CreateJobApplication < ActiveRecord::Migration[5.2]
  def change
    create_table :job_applications do |t|
      t.integer :applicant_id, null: false 
      t.integer :job_post_id
    end
  end
end
