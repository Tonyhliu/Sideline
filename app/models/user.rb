class User < ActiveRecord::Base
  validates :session_token, uniqueness: true, presence: true
  validates :password_digest, presence: { message: "Password can't be blank!" }
  validates :password, length: { minimum: 6, allow_nil: true, message: "Must be at least 6 characters" }
  validates :description, length: { maximum: 140, allow_nil: true }
  validates :description, length: { maximum: 140, allow_nil: true }
  validates :username,
    presence: true,
    uniqueness: { case_sensitive: false },
    length: { in: 4..20 },
    format: { with: /\A[a-zA-Z]+\z/, message: "only letters allowed" }

  attr_reader :password

  before_validation :ensure_session_token
  after_initialize :ensure_session_token

  has_many :stories,
    dependent: :destroy

  has_many :comments,
    dependent: :destroy

  has_many :favorites
  has_many :favorite_stories,
    through: :favorites,
    source: :story

  def self.find_by_credentials(username, password)
      user = User.find_by(username: username)
      return nil unless user && user.valid_password?(password)
      user
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def valid_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end

end
