json.extract! user, :id, :username
json.favorite_stories user.favorite_stories.pluck(:id)
