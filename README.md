# Sideline

[Heroku link][heroku] **Note:** Not yet implemented (Should be link to Heroku)

[heroku]: http://www.herokuapp.com

## Minimum Viable Product

Sideline is a web application inspired by Medium that will be utilizing Ruby on Rails on the backend, a 3greSQL database, and React.js with a Flux pattern on the front end. At a minimum, by the end of Week 9 this app will satisfy the following criteria:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] A production README, replacing this README.
- [ ] Story
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling
- [ ] Response/Comment
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling
- [ ] Likes for Story
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling
- [ ] Follows/Feed for Story
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling

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

### Phase 1: Backend setup and Front End User Authentication (1 day, W1 Tu 6pm)

**Objective:** Functioning rails project with Authentication

- [ ] create new project
- [ ] create `User` model
- [ ] authentication
- [ ] user signup/signin pages
- [ ] blank landing page after signin

### Phase 2: Stories Model, API, and basic APIUtil (1.5 days, W1 Th 12pm)

**Objective:** Stories can be created, read, edited and destroyed through
the API.

- [ ] create `Story` model
- [ ] seed the database with a small amount of test data
- [ ] CRUD API for stories (`StoriesController`)
- [ ] Medium's API? for stories (`StoriesController`)
- [ ] jBuilder views for stories
- [ ] setup Webpack & Flux scaffold
- [ ] setup `APIUtil` to interact with the API
- [ ] test out API interaction in the console.

### Phase 3: Flux Architecture and Router (1.5 days, W1 F 6pm)

**Objective:** Stories can be created, read, edited and destroyed with the
user interface.

- [ ] setup the flux loop with skeleton files
- [ ] setup React Router
- implement each story component, building out the flux loop as needed.
  - [ ] `StoriesIndex`
  - [ ] `StoryIndexItem`
  - [ ] `StoryForm`
- [ ] save Stories to the DB when the form loses focus or is left idle
  after editing.

### Phase 4: Start Styling (0.5 days, W2 M 12pm)

**Objective:** Existing pages (including signup/signin) will look good.

- [ ] create a basic style guide
- [ ] position elements on the page
- [ ] add basic colors & styles

### Phase 5: Feed (1 day, W2 Tu 12pm)

**Objective:** Stories belong to newsFeed, and can be viewed by newsFeed.

- [ ] create `newsFeed` model
- build out API, Flux loop, and components for:
  - [ ] newsFeed CRUD (if it's your own story)
  - [ ] viewing stories on newsFeed
- Use CSS to style new views

Phase 3 adds organization to the Stories. Stories belong to a newsFeed,
which has its own `Index` view.

### Phase 6: Follows (1 days, W2 Th 12pm)

**Objective:** Stories can be liked, followed, and are searchable.

- build out API, Flux loop, and components for:
  - [ ] fetching likes and follows for story
  - [ ] adding follows to a story
  - [ ] searching stories by name
- [ ] Style new elements

### Phase 7: Allow Complex Styling in Notes (0.5 days, W2 Th 6pm)

**objective:** Enable complex styling of stories.

- [ ] Use Rails helpers to sanitize HTML before rendering.

### Phase 8: Styling Cleanup and Seeding (1 day, W2 F 6pm)

**objective:** Make the site feel more cohesive and awesome.

- [ ] Get feedback on my UI from others
- [ ] Refactor HTML classes & CSS rules
- [ ] Add modals, transitions, and other styling flourishes.

### Bonus Features (TBD)
- [ ] Filtered search
- [ ] Pagination / infinite scroll for Stories Index
- [ ] Tags
- [ ] Topics/categories
- [ ] Bookmarks


[phase-one]: docs/phases/phase1.md
[phase-two]: docs/phases/phase2.md
[phase-three]: docs/phases/phase3.md
[phase-four]: docs/phases/phase4.md
[phase-five]: docs/phases/phase5.md


## Must include
## 1) Heroku Link
## 2) MVP
## 3) Wireframes
## 4) React Components
## 5) Flux Cycles
## 6) DB schema
## 7) API Endpoints
## 8) Implementation Timeline

## Eventually need production ReadMe to replace this ReadMe
