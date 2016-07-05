class Story < ActiveRecord::Base
  validates :user_id, :title, :body, presence: true

  belongs_to :user
  has_many :comments,
    dependent: :destroy

  has_many :favorites
  has_many :favorite_users,
    through: :favorites,
    source: :user
end
