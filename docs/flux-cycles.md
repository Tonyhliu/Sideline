# Flux Cycles

Flux loops are organized by data type. Under each data type, there may
be sub-categories, and each action is listed with the sequence of events
that result from its invocation, ending with the API or store. Finally,
store listeners are listed at the end.

You should be able to use this document trace an **action** starting
with where it was invoked, through the **API**/**store** involved, and
finally to the **components** that update as a result. This is important
because once you start implementing your flux loops, that's precisely
what you'll need to do.


## Story Cycles

### Stories API Request Actions

* `fetchAllStories`
  0. invoked from `StoryIndex` `didMount`/`willReceiveProps`
  0. `GET /api/stories` is called.
  0. `receiveAllStories` is set as the callback.

* `createStory`
  0. invoked from new story button `onClick`
  0. `POST /api/stories` is called.
  0. `receiveSingleStory` is set as the callback.

* `fetchSingleStory`
  0. invoked from `StoryDetail` `didMount`/`willReceiveProps`
  0. `GET /api/stories/:id` is called.
  0. `receiveSingleStory` is set as the callback.

* `updateStory`
  0. invoked from `StoryForm` `onSubmit`
  0. `POST /api/stories` is called.
  0. `receiveSingleStory` is set as the callback.

* `destroyStory`
  0. invoked from delete story button `onClick`
  0. `DELETE /api/stories/:id` is called.
  0. `removeStory` is set as the callback.

### Stories API Response Actions

* `receiveAllStories`
  0. invoked from an API callback.
  0. `Story` store updates `_stories` and emits change.

* `receiveSingleStory`
  0. invoked from an API callback.
  0. `Story` store updates `_stories[id]` and emits change.

* `removeStory`
  0. invoked from an API callback.
  0. `Story` store removes `_stories[id]` and emits change.

### Store Listeners

* `StoryIndex` component listens to `Story` store.
* `StoryDetail` component listens to `Story` store.


## SearchSuggestion Cycles

* `fetchSearchSuggestions`
  0. invoked from `StoriesSearchBar` `onChange` when there is text
  0. `GET /api/stories` is called with `text` param.
  0. `receiveSearchSuggestions` is set as the callback.

* `receiveSearchSuggestions`
  0. invoked from an API callback.
  0. `SearchSuggestion` store updates `_suggestions` and emits change.

* `removeSearchSuggestions`
  0. invoked from `StoriesSearchBar` `onChange` when empty
  0. `SearchSuggestion` store resets `_suggestions` and emits change.

### Store Listeners

* `SearchBarSuggestions` component listens to `SearchSuggestion` store.
