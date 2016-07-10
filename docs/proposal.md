# Sideline

[Heroku link][Sideline] Sideline

[Sideline]: http://www.thesideline.club

## Minimum Viable Product

Sideline is a web application inspired by Medium that will be utilizing Ruby on Rails on the backend, a 3greSQL database, and React.js with a Flux pattern on the front end. At a minimum, by the end of Week 9 this app will satisfy the following criteria:

- [x] Hosting on Heroku
- [x] New account creation, login, and guest/demo login
- [x] A production README, replacing this README.
- [x] Story
  - [x] Smooth, bug-free navigation
  - [x] Adequate seed data to demonstrate the site's features
  - [x] Adequate CSS styling
- [x] Response/Comment
  - [x] Smooth, bug-free navigation
  - [x] Adequate seed data to demonstrate the site's features
  - [x] Adequate CSS styling
- [x] Tags for Story
  - [x] Smooth, bug-free navigation
  - [x] Adequate seed data to demonstrate the site's features
  - [x] Adequate CSS styling
- [x] Follows/Feed for Story
  - [x] Smooth, bug-free navigation
  - [x] Adequate seed data to demonstrate the site's features
  - [x] Adequate CSS styling

## Design Docs
* [View Wireframes][views]
* [React Components][components]
* [Flux Cycles][flux-cycles]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[views]: docs/views.md
[components]: docs/components.md
[flux-cycles]: docs/flux-cycles.md
[api-endpoints]: docs/api-endpoints.md
[schema]: docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 day, W1 Tu 6pm)

**Objective:** Functioning rails project with Authentication

- [x] create new project
- [x] create `User` model
- [x] authentication
- [x] setup Webpack & Flux scaffold
- [x] setup API
- [x] user signup/signin pages
- [x] blank landing page after signin
- [x] basic styling

### Phase 2: Stories Model, API, and basic APIUtil (1.5 days, W1 F 12pm)

**Objective:** Stories can be created, read, edited and destroyed through
the API.

- [x] create `Story` model
- [x] seed the database with a small amount of test data
- [x] CRUD API for stories (`StoriesController`)
- [x] Medium's API continued. jQuery & Kimono?
- [x] jBuilder views for stories
- [x] setup `APIUtil` to interact with the API
- [x] test out API interaction in the console.
- [x] basic styling


### Phase 3: Flux Architecture and Router (1.5 days, W1 F 6pm)

**Objective:** Stories can be created, read, edited and destroyed with the
user interface.

- [x] setup the flux loop with skeleton files
- [x] setup React Router
- [x] implement each story component, building out the flux loop as needed.
  - [x] `StoryIndex`
  - [x] `StoryIndexItem`
  - [x] `StoryForm`
  - [x] basic styling


### Phase 4: Start Styling (0.5 days, W2 M 12pm)

**Objective:** Existing pages (including signup/signin) will look good.

- [x] create a basic style guide
- [x] position elements on the page
- [x] add basic colors & styles
- [x] basic styling


### Phase 5: Feed (1 day, W2 Tu 12pm)

**Objective:** Stories belong to newsFeed, and can be viewed by newsFeed.

- [x] create `newsFeed` model
- [x] build out API, Flux loop, and components for:
  - [x] newsFeed CRUD (if it's your own story)
  - [x] viewing stories on newsFeed
- [x] Use CSS to style new views
- [x] basic styling


Phase 3 adds organization to the Stories. Stories belong to a newsFeed,
which has its own `Index` view.

### Phase 6: Follows (1 days, W2 Th 12pm)

**Objective:** Stories can be liked, followed, and are searchable.

- [x] build out API, Flux loop, and components for:
  - [x] fetching tags and follows for story
  - [x] adding follows to a story
  - [x] searching stories by name
- [x] Style new elements
- [x] basic styling


### Phase 7: Allow Complex Styling in Notes (0.5 days, W2 Th 6pm)

**objective:** Enable complex styling of stories.

- [x] Use Rails helpers to sanitize HTML before rendering.
- [x] basic styling


### Phase 8: Styling Cleanup and Seeding (1.5-2 day, W2 F 6pm)

**objective:** Make the site feel more cohesive and awesome.

- [x] Get feedback on my UI from others
- [x] Refactor HTML classes & CSS rules
- [x] Add modals, transitions, and other styling flourishes.
- [x] basic styling


### Bonus Features (TBD)
- [x] Banner pictures for stories
- [ ] Filtered search
- [ ] Pagination / infinite scroll for Stories Index
- [ ] Tags
- [ ] Topics/categories
- [ ] Bookmarks
- [ ] Saving story (as draft) if left idle



[phase-one]: docs/phases/phase1.md
[phase-two]: docs/phases/phase2.md
[phase-three]: docs/phases/phase3.md
[phase-four]: docs/phases/phase4.md
[phase-five]: docs/phases/phase5.md
