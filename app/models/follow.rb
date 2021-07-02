class Follow < ApplicationRecord
    validates :follower_id, :followed_user_id, presence: true

    belongs_to :follower,  #user initiating the following
    foreign_key: :follower_id, 
    class_name: :User

    belongs_to :followed_user, # user being followed
    foreign_key: :followed_user_id, 
    class_name: :User

end
