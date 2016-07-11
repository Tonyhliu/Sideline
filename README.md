# Sideline

[Sideline][sideline] is a web application for users to read and write about sports news. Inspired by Medium, Sideline allows users to share their own stories and discover stories by other users.

Sideline is a personal project by Tony Hoyin Liu.

![Sideline home page: http://www.thesideline.club][home page]

## Features

- User accounts with secure authentication
- Image attachments for users and stories
- Uploading unique profile picture
- Liking or Unliking a story
- Searching by story title or content
- Comments

![demo_user's stories feed: http://www.thesideline.club/#/stories][stories]

## Project Design

Sideline was designed and built in two weeks.

A [proposal][proposal] was drafted to help provide an implementation timeline during the development process.

A [database schema][schema] was prepared alongside the design proposal.

## Technology

Sideline is a single-page application built on Rails and React.js, with many dependencies in both the backend and the frontend.

- Backend : Sideline runs on Ruby on Rails and is hosted on Heroku.       
  - The purpose of the backend is to provide RESTful APIs and respond with JSON data.
  - NewRelic (an Application Performance Management tool) was used to automatically ping Heroku dyno, keeping it awake for faster client response.
  - PostgresQL RDBMS was also used for Heroku
  - BCrypt used for password hashing and salting for a secure authentication system.

- Frontend: Sideline utilizes the React.js framework and follows the flux Architecture to deliver to frontend.

  - Node Package Manager (npm) used to install all of the frontend dependencies. A post-install script is also configured so that webpack bundles all of the frontend files.
  - Webpack bundles all of the frontend components and Flux parts and includes it in the main application.js file.
  - All of the React and Flux components are located in the frontend directory.
  - Site styling was sped up with React Bootstrap for mostly buttons.
  - JQuery was used to make AJAX requests with the Rails server.
  - Babel for transpiling JSX into JavaScript.
  - Other frontend dependencies include React DOM, React Router, and React History.

- File storage via Cloudinary to host pictures and videos.

## Future Implementations

Sideline is only barely considered an MVP.

Two weeks was not a lot of time to fully implement all the features planned out. The features that will be continued to be worked on are listed in the [future implementations][future] outline.

[sideline]: http://thesideline.club
[home page]: ./docs/home-page.png "Sideline home page"
[stories]: ./docs/demo-stories.png "A user's stories"
[proposal]: ./docs/proposal.md
[schema]: ./docs/schema.md
[future]: ./docs/future.md
