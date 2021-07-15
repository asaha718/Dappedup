class JobApplication < ApplicationRecord
    validates :applicant_id, :job_post_id, presence: true

    belongs_to :applicant, #user who is applying to job
    foreign_key :applicant_id, 
    class_name :User

    belongs_to :job_post, #the post the user is applying to 
    foreign_key :job_post_id, 
    class_name :JobPosting

end
