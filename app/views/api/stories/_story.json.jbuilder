json.extract! story, :id, :title, :body, :user

json.comments do
  json.partial! 'api/comments/comment', collection: story.comments, as: :comment
end
