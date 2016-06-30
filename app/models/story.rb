class Story < ActiveRecord::Base
  validates :user_id, :title, :body, presence: true

  belongs_to :user,
    inverse_of: :story,
    dependent: :destroy

  has_many :comments,
    inverse_of: :story,
    dependent: :destroy
end
