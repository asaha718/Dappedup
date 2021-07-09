class CreateJobPostings < ActiveRecord::Migration[5.2]
  def change
    create_table :job_postings do |t|
      t.integer :company_id, null: false 
      t.string :header, null: false
      t.text :body 
    end
  end
end
