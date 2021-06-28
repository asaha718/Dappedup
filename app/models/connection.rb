class Connection < ApplicationRecord
    validates :connecter_id, :connectee_id, presence: true

    belongs_to :connecter, #user that is following others
    foreign_key: :connecter_id,
    class_name: :User

    belongs_to :connectee, #user that is being followed
    foreign_key: :connectee_id,
    class_name: :User


end