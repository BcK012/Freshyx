# FRESHYX Backend

This directory contains the NestJS backend for the FRESHYX application. It serves partner data via a RESTful API.

## Running the Server

1.  Navigate into this directory: `cd backend`
2.  Install dependencies: `npm install`
3.  Run the development server: `npm run start:dev`

The server will start on `http://localhost:3001`.

## API Endpoints

-   `GET /api/partners`: Returns a list of all partners.
-   `GET /api/partners/:id`: Returns a single partner by their ID (e.g., `sayna`).
