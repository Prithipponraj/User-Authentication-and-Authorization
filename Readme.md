Here’s a detailed **README** for your project on user authentication and authorization using Bearer tokens in a Node.js application with Express.js, Mongoose, and JWT.

---

# **User Authentication and Authorization with Bearer Token**

This project demonstrates how to implement user authentication and authorization in a Node.js application using Express.js, Mongoose, and JWT (JSON Web Token). It follows the MVC pattern and includes user registration, login, and access to protected routes with Bearer token authentication.

## **Table of Contents**
1. [Project Overview](#project-overview)
2. [Technologies Used](#technologies-used)
3. [Setup](#setup)
4. [API Endpoints](#api-endpoints)
5. [Running the Application](#running-the-application)
6. [Postman Collection](#postman-collection)
7. [File Structure](#file-structure)
8. [License](#license)

## **Project Overview**
This application provides secure user authentication using JWT. It supports:
- **User Registration**: New users can sign up by providing their username, email, and password.
- **User Login**: Existing users can log in with their credentials to receive a JWT token.
- **Protected Routes**: Users must send the JWT in the request header (Bearer token) to access certain protected routes.

### Key Features:
- JWT-based authentication
- Password hashing with `bcryptjs`
- Express.js for API routing
- MongoDB as the database using Mongoose
- MVC architecture for better organization

## **Technologies Used**
- **Node.js**: JavaScript runtime for building the server-side application.
- **Express.js**: Web framework for routing and handling HTTP requests.
- **Mongoose**: MongoDB object modeling tool for working with the database.
- **JWT (jsonwebtoken)**: For creating and verifying JSON Web Tokens.
- **bcryptjs**: For hashing user passwords.
- **dotenv**: For managing environment variables.

## **Setup**

### Prerequisites:
- **Node.js** (v12 or higher)
- **MongoDB** (local or cloud database)
- **Postman** for testing the API endpoints (optional)

### Steps to Run Locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/auth-bearer-token-example.git
   cd auth-bearer-token-example
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add the following environment variables:
   ```
   MONGO_URI=your_mongo_connection_string
   JWT_SECRET=your_secret_key_for_jwt
   PORT=5000
   ```

4. Start the server:
   ```bash
   npm start
   ```

5. The server will now be running at `http://localhost:5000`.

---

## **API Endpoints**

### **1. User Registration**

- **Endpoint**: `POST /api/users/register`
- **Description**: Registers a new user with a username, email, and password.
- **Request Body**:
  ```json
  {
    "username": "user1",
    "email": "user1@example.com",
    "password": "password123"
  }
  ```
- **Response**:
  - **Success (201)**:
    ```json
    {
      "message": "User registered successfully"
    }
    ```
  - **Error (400)**:
    ```json
    {
      "message": "Validation error: Missing fields or invalid format"
    }
    ```

---

### **2. User Login**

- **Endpoint**: `POST /api/users/login`
- **Description**: Authenticates a user and returns a JWT if credentials are valid.
- **Request Body**:
  ```json
  {
    "email": "user1@example.com",
    "password": "password123"
  }
  ```
- **Response**:
  - **Success (200)**:
    ```json
    {
      "token": "JWT_TOKEN"
    }
    ```
  - **Error (400)**:
    ```json
    {
      "message": "Invalid credentials"
    }
    ```

---

### **3. Get User Information (Protected Route)**

- **Endpoint**: `GET /api/users/me`
- **Description**: Returns the authenticated user's information.
- **Headers**:
  - `Authorization: Bearer JWT_TOKEN`
- **Response**:
  - **Success (200)**:
    ```json
    {
      "username": "user1",
      "email": "user1@example.com"
    }
    ```
  - **Error (401)**: Token verification failed.
    ```json
    {
      "message": "No token, authorization denied"
    }
    ```

---

## **Running the Application**

1. Clone the repository and navigate into the project folder.
   ```bash
   git clone https://github.com/your-username/auth-bearer-token-example.git
   cd auth-bearer-token-example
   ```

2. Install the necessary dependencies.
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your MongoDB URI and JWT secret.
   Example:
   ```
   MONGO_URI=mongodb://localhost:27017/auth-db
   JWT_SECRET=mysecretkey
   ```

4. Run the application:
   ```bash
   npm start
   ```

5. The app will run at `http://localhost:5000`.

---

## **Postman Collection**

To make it easier to test the API, a Postman collection has been created with sample requests for all the available endpoints. You can import the collection into your Postman app and use it to test the API.

1. Download the Postman collection JSON file from the project repository.
2. Open Postman and click on **Import** > **Upload Files**.
3. Select the downloaded JSON file and import it.
4. Test each endpoint by sending requests to the server with the appropriate data.

https://web.postman.co/workspace/0d5dec0e-e76d-4b4e-a73b-5248d9ecab55/documentation/38651253-2852bea2-f853-49ee-8c18-a3f1bdf3aa15
---


This **README** provides an overview of the user authentication system, setup instructions, API endpoints, and file structure, helping users get started with the project quickly and understand its functionality.