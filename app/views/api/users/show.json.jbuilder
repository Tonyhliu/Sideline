# json.extract! user, :id, :username
json.partial! "api/users/user", user: @user

json.favorite_stories @user.favorite_stories.map { |story|
  story.id
}
