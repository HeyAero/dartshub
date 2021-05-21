# Darts Hub
By Aaron, Emmanuel & Faisal

## What is Darts Hub?
Hello there!

DartsHub is a online multiplayer darts match web app that allows players from around the would to play against eachother. You can train, play and track your stats all within one app!

## Deployment Links
[Our Website](https://dartshub.netlify.app/)

## Instalation & Use

### For local use, download and run docker
1. Clone the repo onto your local machine
2. cd into the root folder
3. To run the client side run these command:
  3. `npm run install`
  3. `npm run dev`
  3. Visit `localhost:8080` to view the app
  3. To run tests: `npm run test` or `npm run coverage`
4. To run the server side:
  4. In your bash terminal run: `bash _scripts/startDev`
  4. To run coverage: `bash _scripts/startCoverage`
  4. Make sure to teardown with: `bash _scripts/teardown`

## Technologies
- Our language stack: Javascript, Python, SCSS, SQL, HTML
- React
- Django
- Django Channels
- Testing libraries
  - Jest
  - React Testing Library
  - jest-websocket-mock
  - pytest
- Bootstrap
- Axios
- Webpack

## Design
Here are some of our wireframes:
![Wireframe 1](https://i.imgur.com/y0ROZfX.png)
![Wireframe 2](https://i.imgur.com/OwtFmQy.png)

## Wins & Challenges

### Wins
1. Used a new technology: Django Channels and implemented it
2. Used another new language: SCSS
3. Fully working app which allows connections around the world!
4. Testing coverage for both client / server between 70%-80%
5. Deployed the client and backend

### Challenges
1. Deploying a ASGI app on Heroku