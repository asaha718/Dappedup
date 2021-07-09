class JobPosting < ApplicationRecord
    validates :header, presence: true

    belongs_to :company, 
    foreign_key: :company_id, 
    class_name: :User 
    
end