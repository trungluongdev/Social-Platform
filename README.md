# Social Platform

Welcome to Social Platform, a modern social networking platform where users can create profiles, share posts, comment, like, and interact with others. This project is built using Node.js, Express, MongoDB, and React.

# Features

- User Authentication (Sign up, Log in, Log out)
- Create and edit user profiles
- Create, edit, and delete posts
- Like, comment on posts
- Follow and unfollow users
- Real-time notifications
- Newsfeed to see posts from followed users
- Search users and posts by keyword

# Getting Started with Create React App

# Installation

1. Clone the repository:
   git clone https://github.com/trungluongdev/Social-Platform.git
   cd social-fe
2. Install server dependencies:
   npm install

## Environment Variables

Create a .env file in the root directory of your project and add the following variables:

# Server settings

PORT=5000
MONGODB_URI=mongodb://localhost:27017/social-fe

## Running the Application

Start the development server:
npm run dev

The API server will run on http://localhost:5000, and the frontend will run on http://localhost:3000.

## API Endpoints

# User Routes

- POST /api/users/register - Register a new user
- POST /api/users/login - Log in to the platform
- GET /api/users/:id - Get a user profile by ID
- PUT /api/users/:id - Edit a user profile

# Post Routes

- POST /api/posts - Create a new post
- GET /api/posts - Get all posts (supports pagination)
- GET /api/posts/:id - Get a post by ID
- PUT /api/posts/:id - Update a post
- DELETE /api/posts/:id - Delete a post

# Follow/Unfollow Routes

- POST /api/users/:id/follow - Follow a user
- DELETE /api/users/:id/unfollow - Unfollow a user

# Other service configurations (optional)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\

### `npm build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

### `npm build` fails to minify
