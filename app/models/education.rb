class Education < ApplicationRecord
    validates :school, :field_of_study, :start_date, presence: true

    belongs_to :user, 
    foreign_key: :user_id, 
    class_name: :User
end
