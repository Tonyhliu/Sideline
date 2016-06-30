# Phase 2: Flux Architecture and Note CRUD (2 days)

## Rails
### Models

### Controllers

### Views

## Flux
### Views (React Components)
* StoryIndex
  - StoryIndexItem
* StoryForm

### Stores
* Story

### Actions
* ApiActions.receiveAllStories -> triggered by ApiUtil
* ApiActions.receiveSingleStory
* ApiActions.deleteStory
* StoryActions.fetchAllStories -> triggers ApiUtil
* StoryActions.fetchSingleStory
* StoryActions.createStory
* StoryActions.editStory
* StoryActions.destroyStory

### ApiUtil
* ApiUtil.fetchAllStories
* ApiUtil.fetchSingleStory
* ApiUtil.createStory
* ApiUtil.editStory
* ApiUtil.destroyStory

## Gems/Libraries
* Flux Dispatcher (npm)
* Twitter Bootstrap
