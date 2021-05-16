class Job < ApplicationRecord
    validates :title, :field, :company, :description, :start_date, presence: true

    belongs_to :user,
    foreign_key: :user_id, 
    class_name: :User 
end
