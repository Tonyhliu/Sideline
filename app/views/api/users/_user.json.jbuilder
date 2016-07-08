json.extract! user, :id, :username, :avatar_url
json.favorite_stories user.favorite_stories.pluck(:id)
