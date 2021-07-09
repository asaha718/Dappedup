class Job < ApplicationRecord
    validates :title, :field, :company, :description, :start_date, presence: true #, :user_role_must_be_company

    belongs_to :user,
    foreign_key: :user_id, 
    class_name: :User 
    
    # def user_role_must_be_company
    #     if user_role != "company"
    #         errors.add(:user_role, "Role must be company")
    #     end
    # end
    
end
