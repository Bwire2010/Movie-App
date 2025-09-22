# Movie Recommendation App

A simple movie recommendation web application built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, and **TanStack Query**. The app fetches data from [TMDB](https://www.themoviedb.org/) and allows users to browse popular movies, search for movies, view details, and navigate via pagination.  

This project was developed as part of the **SIL Frontend Engineer Assessment**.

## Features

- **Movie List** – View a grid of popular movies with title, poster, overview, and release year.  
- **Movie Details** – Click on a movie to see detailed information, including cast, crew, ratings, and overview.  
- **Search** – Search for movies by title or keyword with debounced input.  
- **Pagination** – Navigate through pages of results for both popular and search results.  
- **Loader / Feedback** – Loading indicators while fetching data from the API.  
- **TypeScript Types** – Fully typed interfaces for API responses and movie data.  
- **State Management** – Data fetching and caching handled via **TanStack Query**.  
- **Authentication (Optional)** – Can integrate **NextAuth.js** for personalized features.  

## Tech Stack

- **Framework**: Next.js (App Router)  
- **Language**: TypeScript  
- **Styling**: Tailwind CSS  
- **Data Fetching & Caching**: TanStack Query  
- **Testing**: Jest + React Testing Library  
- **Deployment**: Vercel (recommended)  
- **API**: [TMDB API](https://www.themoviedb.org/documentation/api)  

## Getting Started

### Prerequisites

- Node.js v18+  
- NPM or Yarn  
- TMDB API Key ([Get your free key here](https://www.themoviedb.org/documentation/api))  

### Installation

```bash
# Clone the repo
git clone https://github.com/<your-username>/movie-app.git
cd movie-app

# Install dependencies
npm install
# or
yarn install

# Create environment variables
cp .env.example .env.local
# Add your TMDB API key to .env.local

# Example .env.local

NEXT_PUBLIC_TMDB_API_KEY=your_tmdb_api_key_here
NEXTAUTH_SECRET=some_long_secret
NEXTAUTH_URL=http://localhost:3000

# Running Locally

npm run dev
# or
yarn dev

Open http://localhost:3000 to see the app.

# Testing

Run unit tests with:

npm run test
# or
yarn test

# Deployment

This app is ready to deploy to Vercel or any hosting provider supporting Next.js.

# Steps
# 1. Push your code to GitHub
# 2. Connect the repository to Vercel
# 3. Add your environment variables (TMDB API key, NEXTAUTH secrets)
# 4. Deploy

# Branch Strategy & Commit Conventions

# Branches
main → Production
develop → Staging
feat/<short-description> → New features

# Commits
Follow Conventional Commits:
feat: for new features
fix: for bug fixes
test: for tests
docs: for documentation

# CI/CD
Linting & Tests – GitHub Actions runs ESLint and unit tests on every push / PR.
Deployment – Automatic deployment to Vercel on successful builds from main.

# Author
Savannah Informatics Assessment – Frontend Engineer
Developed by: [Patrobas]
Location: Nairobi, Kenya
Contact: patrobwire2012@gmail.com | +254 712290167

# License
MIT License – Free to use for assessment purposes.
