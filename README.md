# Book Directory App

Welcome to the Book Directory app! This repository contains a Node.js application for managing a directory of books. Below, you'll find instructions on how to set up, run, and install this app locally.

## Setup

Follow these steps to set up the Book Directory app on your local machine:

1.  **Clone the Repository**

    First, clone this repository to your local machine using Git:

        git clone https://github.com/nvenkm/book-directory

2.  **Navigate to the Project Directory**

    Change your working directory to the project folder:

        cd book-directory

3.  **Install Dependencies**

    Install the required Node.js packages by running the following command

        npm install

4.  **Environment Variables**

    Create a `.env` file in the project root and add the following environment variables:

        DB_URI = your_mongodb_uri
        JWT_SECRET = your_secret_key
        PORT = anyPort

    Replace `your_mongodb_uri` with your MongoDB connection string and `your_secret_key` with your preferred JSON Web Token (JWT) secret key.

## Run

Now that you've set up the app, you can run it using the following commands:

- **Development Mode:** This mode uses `nodemon` for automatic server restart during code changes.

        npm run dev

- **Production Mode:** Use this command to start the app in production mode.

        npm start

The app should be up and running locally, and you can access it at `http://localhost:PORT` in your web browser.

## Usage

You can use the Book Directory app to manage a collection of books. This app provides endpoints for adding, updating, and deleting books. You can interact with the API using tools like [Postman](https://www.postman.com/) or by making HTTP requests directly.

## Dependencies

The Book Directory app relies on the following Node.js packages:

- `bcrypt` - For hashing passwords
- `dotenv` - For managing environment variables
- `express` - A web application framework
- `jsonwebtoken` - For handling JSON Web Tokens
- `mongoose` - An ODM for MongoDB
- `nodemon` (devDependency) - For automatic server restart during development

Make sure you have these dependencies installed as described in the setup section.

## Read the API documentation here

[API docs](./api-doc.md)

## 🌟 Stay Inspired

Keep coding, stay curious, and make things happen! Your potential is limitless. 💻✨
