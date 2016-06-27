# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

### Users

- `GET /users/new`
- `POST /users`
- `PATCH /users`

### Session

- `GET /session/new`
- `POST /session`
- `DELETE /session`

## JSON API

### Stories

- `GET /api/stories`
  - Stories index/search
  - accepts `tag_name` query param to list stories by tag
  - accepts pagination params (if I get there)
- `POST /api/stories`
- `GET /api/stories/:id`
- `PATCH /api/stories/:id`
- `DELETE /api/stories/:id`

### Tags

- A story's tags will be included in the story show template
- `GET /api/tags`
  - includes query param for typeahead suggestions
- `POST /api/stories/:story_id/tags`: add tag to story by name
  - if story doesn't already exist, it will be created
- `DELETE /api/stories/:story_id/tags/:tag_name`: remove tag from story by name
