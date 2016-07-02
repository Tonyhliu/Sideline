class Comment < ActiveRecord::Base
  validates :body, presence: true

  belongs_to :story
  # inverse_of: :comments
end
