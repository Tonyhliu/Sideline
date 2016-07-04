json.extract! story, :id, :title, :body, :user, :picture_url

json.comments do
  json.partial! 'api/comments/comment', collection: story.comments, as: :comment
end
