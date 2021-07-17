class JobPosting < ApplicationRecord
    validates :header, presence: true

    belongs_to :company, 
    foreign_key: :company_id, 
    class_name: :User 

    has_many :received_applications, 
    foreign_key: :job_post_id, 
    class_name: :JobApplication

    has_many :applicants, 
    through: :received_applications, 
    source: :applicant
    
end