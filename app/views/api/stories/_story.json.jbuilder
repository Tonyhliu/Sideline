json.extract! story, :id, :title, :body, :user, :picture_url

json.favorite_users story.favorite_users.map { |user|
  user.id
}

json.comments do
  json.partial! 'api/comments/comment', collection: story.comments, as: :comment
end
