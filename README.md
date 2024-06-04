# Gaza Projections Website

## Prerequisites

You will need the following things properly installed on your computer:

- [Git](https://git-scm.com/)
- [Node.js and npm](https://nodejs.org/en) (Node version 18.x)

## Installation

- Install the prerequisites listed above
- Clone the repo to your local machine (`git clone...`)
- Install dependencies `npm install`

## Development Server

To start the server in development mode use the command `npm run dev` and visit the URL `http://localhost:5173` in your browser.

## Production Build

To build the website for production use the command `npm run build`. This will build the website in the `dist` folder. You can preview the production build locally after building it by running `npm run preview` and visit `http://localhost:4173` in your browser.

## Deployment

The website is deployed to GitHub Pages using a GitHub Action. The deployment will automatically kick off any time you push a commit to the `main` branch.
