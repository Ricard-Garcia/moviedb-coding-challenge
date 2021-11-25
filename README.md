# MovieDb Coding Challenge

- [Introduction & requirements](##introcution-&-requirements)
- [Getting started](##getting-started)
- [Project structure](##project-structure)
- [Deployment](##deployment)
- [Workflow](##workflow)
- [Future improvements](##future-improvements)
- [Feedback](##feedback)
- [Resources](##resources)

## 🧭 Introduction & requirements

This repository contains a tech challenge as a part of a frontend job application process, a **frontend** web application developed using React, Redux and Typescript.

The purpose of this application is to consume [The movie db](https://www.themoviedb.org/) and show both movies and tv shows in different pages. The Home page renders a set of popular movies and the user can switch to the popular tv shows using a toggle.

Each movie/show card is a link that redirects the user to a detailed page showing not only an image, title and the overview of that item but also genres, a summary of the cast and some similar movies/shows.

The application also allows the user to switch between themes, that are stored as a global state using Redux.

> Check the deployed version of this challenge [here](https://moviedb-coding-challenge.herokuapp.com/)

## 🚀 Getting Started

The following steps will guide you through the essentials you will have to install and run in order to use this repository and build this application in your local machine.

### Installation🔧

First, you will need to `clone` or `fork` the repository into your Github account. Choose a place in your local machine and paste the next command in your terminal:

```
$ git clone https://github.com/Ricard-Garcia/moviedb-coding-challenge.git
```

### Requirements 📋

**Yarn**

Also, since this repository is taking advantage of [Yarn](https://yarnpkg.com/) workspaces (both client and server are inside the same repository), first of all you will need to install `yarn` globally on your computer:

```
npm install -g yarn
```

**Environment variables**

The **client** .env file needs to contain the endpoint pointing at the API and also the API key. This is where the client is getting the data from the database.

```
REACT_APP_API_ROUTE=https://api.themoviedb.org/3
REACT_APP_API_KEY=pasteYourApiKeyOverHere
```

### Tests

The application has a couple of tests to check that the main components are rendered and that some links are pointing at the desired endpoint. To run these tests you can do it like so:

```
yarn test
```

## 🦴 Project Structure

### Folder structure 🗂

```
├── documentation
└── src
  ├── __test__
  ├── api <i>// All api petitions</i>
  ├── components
  ├── constants
  ├── __mocks__ <i>// For testing purposes</i>
  ├── pages
  ├── sass
  └── utils <i>// Reusable code snippets </i>

```

### Client 🖥

The client package consists in a React app using a Typescript template. Its `src` folder contains components used in the application and the page that contains all of these components and arranges them in the only view.

In terms of connecting to the API, the client side has an `api` folder that contains all functions needed to create an axios connection to the API endpoint and apply the desired HTTP verb (either `GET` or `PATCH`).

Last but not least, the application is styled with Sass and it is divided into separate files in the application. Some components have their own unique styles while a general styling (a sort of personal Bootstrap) is defined in the `sass` folder where all diferent components are defined for convinence.

## Deployment 🛫

In order to deploy both client and server workspace this application has used [Heroku](www.heroku.com).

## 🗺 Workflow

### Organization 📆

Even though the size of its application is small, the **Scrum Agile Methodology** has been applied to develop it. One can consider this entire tech challenge as a **sprint** consisting of four main **epics** (listed below) all with different **user stories** and subtasks.

**Epics**

- Initial configuration
- Design & project structure
- API calls
- Testing

### Naming Strategy

In order to make the application easy to develop (and extend by others!), this previous Scrum methodology has been applied in how branches have been named. See this:

```
epic-name/user-story/1
```

## 🤝 Future improvements

- Authentication.
- General searchbar.
- Use localstorage to persist data (for example: theme)
- Improve and do more tests.
- Add detailed cast page.

## 🕵️‍♂️ Resources

### Main resources

- [Bootstrap](https://getbootstrap.com/)
- [Eslint](https://eslint.org/)
- [NodeJs](https://nodejs.org/)
- [Prettier](https://prettier.io/)
- [React](https://es.reactjs.org/)
- [SASS](https://sass-lang.com/)
- [Typescript](https://www.typescriptlang.org/)
- [Yarn](https://yarnpkg.com/)
- [The MovieDb](https://developers.themoviedb.org/3/movies/get-similar-movies)

### Libraries

- [Helmet Async](https://github.com/staylor/react-helmet-async)
- [React-icons](https://react-icons.github.io/react-icons/)

## Contributor ✨

👤 [Ricard Garcia](https://github.com/Ricard-Garcia)
