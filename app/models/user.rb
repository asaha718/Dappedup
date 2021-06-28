class User < ApplicationRecord
    validates :email, :password_digest, :session_token, presence: true
    validates :email, uniqueness:true
    validates :password, length: {minimum: 6 }, allow_nil: true
    after_initialize :ensure_session_token
    attr_reader :password

    has_one_attached :profile_pic

    has_many :posts, 
    foreign_key: :author_id, 
    class_name: :Post

    has_many :educations, 
    foreign_key: :user_id, 
    class_name: :Education

    has_many :jobs, 
    foreign_key: :user_id, 
    class_name: :Job

    has_many :active_connections, 
    foreign_key: :connecter_id,
    class_name: :Connection

    has_many :passive_connections,
    foreign_key: :connectee_id,
    class_name: :Connection

    has_many :followers, #users that are following this user
    through: :passive_connections,
    source: :connecter

    has_many :followed, #users that this user is following
    through: :active_connections,
    source: :connectee
    
    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        return nil unless user
        user.is_password?(password) ? user : nil
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end
    
    def reset_session_token!
        generate_unique_session_token
        save!
        self.session_token
    end
    
    private
    
    def ensure_session_token
        generate_unique_session_token unless self.session_token
    end

    def new_session_token
        SecureRandom.urlsafe_base64
    end

    def generate_unique_session_token
        self.session_token = new_session_token
        while User.find_by(session_token: self.session_token)
          self.session_token = new_session_token
        end
        self.session_token
    end

end
