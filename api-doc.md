# Bookstore API

This is the documentation for the Bookstore API, version 1.0.0.

## Table of Contents

- [Books](#books)
  - [Get a list of books with pagination](#get-a-list-of-books-with-pagination)
  - [Create a new book](#create-a-new-book)
  - [Get a book by ID](#get-a-book-by-id)
  - [Update a book by ID](#update-a-book-by-id)
  - [Delete a book by ID](#delete-a-book-by-id)
- [Authentication](#authentication)
  - [Register a user](#register-a-user)
  - [Login with user credentials](#login-with-user-credentials)

## Books

### Get a list of books with pagination

- **Method**: GET
- **Summary**: Get a list of books with pagination
- **Parameters**:
  - `page` (query): Page number (default is 1)
  - `limit` (query): Number of books per page (default is 5)
- **Responses**:
  - `200`: A list of books
  - `404`: No books to display

### Create a new book

- **Method**: POST
- **Summary**: Create a new book
- **Request Body**:
  - Content Type: application/json
  - Schema: [Book](#book-schema)
- **Responses**:
  - `201`: Book created successfully
    - Content Type: application/json
    - Schema: [Book](#book-schema)

### Get a book by ID

- **Method**: GET
- **Summary**: Get a book by ID
- **Parameters**:
  - `id` (path): The ID of the book to retrieve
- **Responses**:
  - `200`: The book with the specified ID
  - `500`: Something went wrong

### Update a book by ID

- **Method**: PUT
- **Summary**: Update a book by ID
- **Parameters**:
  - `id` (path): The ID of the book to update
- **Request Body**:
  - Content Type: application/json
  - Schema: [Book](#book-schema)
- **Responses**:
  - `200`: The updated book
  - `500`: Something went wrong

### Delete a book by ID

- **Method**: DELETE
- **Summary**: Delete a book by ID
- **Parameters**:
  - `id` (path): The ID of the book to delete
- **Responses**:
  - `204`: Book deleted successfully
  - `500`: Something went wrong

## Authentication

### Register a user

- **Method**: POST
- **Summary**: Register a user
- **Request Body**:
  - Content Type: application/json
  - Schema: [User](#user-schema)
- **Responses**:
  - `200`: User registered successfully
  - `500`: Something went wrong

### Login with user credentials

- **Method**: POST
- **Summary**: Login with user credentials
- **Request Body**:
  - Content Type: application/json
  - Schema: [LoginCredentials](#logincredentials-schema)
- **Responses**:
  - `200`: User logged in successfully
  - `500`: Something went wrong

## Schemas

### Book Schema

- Type: object
- Properties:
  - `name`: string
  - `author`: string
  - `description`: string

### User Schema

- Type: object
- Properties:
  - `name`: string
  - `email`: string
  - `password`: string

### LoginCredentials Schema

- Type: object
- Properties:
  - `email`: string
  - `password`: string

## Servers

- **Local Server**
  - Description: Added by API Auto Mocking Plugin
  - URL: https://localhost:3000
