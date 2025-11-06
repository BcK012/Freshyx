# FRESHYX Full-Stack Application

This repository contains the full source code for the FRESHYX application, structured as a monorepo with a separate frontend and backend.

## Structure

-   `/frontend`: Contains the React frontend application.
-   `/backend`: Contains the NestJS backend API.

## How to Run

### Backend Server

1.  Navigate to the backend directory:
    ```bash
    cd backend
    ```
2.  Install the dependencies:
    ```bash
    npm install
    ```
3.  Start the development server:
    ```bash
    npm run start:dev
    ```
    The backend API will be running on `http://localhost:3001`.

### Frontend Application

Please follow the instructions provided by your development environment to run the frontend application located in the `/frontend` directory. It is configured to connect to the backend server at `http://localhost:3001`.
