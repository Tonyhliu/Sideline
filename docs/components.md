## Component Hierarchy

**Bolded** components are associated with routes.

<!-- (:exclamation: Remember, the bolded components are created by their
associated routes, so the nesting of your bolded components must
_**exactly**_ match the nesting of your routes.) -->

* **App**
  * **StoriesIndex**
    * Search
    * StoryForm
    * StoryIndexItem
    * **StoryDetail**
      * StoryTags
      * StoryEditArea


## Routes

* **component:** `App` **path:** `/`
  * **component:** `StoriesIndex` **path:** index
  * **component:** `StoriesIndex` **path:** `stories/:storyId`
    * **component:** `StoryDetail` **path:** `stories/:storyId`
