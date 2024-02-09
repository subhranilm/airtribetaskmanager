# Task Manager RESTful API

This project aims to create a simple RESTful API for managing tasks using Node.js, Express.js, and other necessary NPM packages. The API will allow users to perform CRUD operations (Create, Read, Update, and Delete) on tasks. Each task will have a title, description, and a flag for completion status.

## Installation

To get started with this project, follow these steps:

1. Clone this repository to your local machine:
git clone <repository-url>

2. Navigate to the project directory:
cd task-manager-api

3. Install dependencies:
npm install

## Usage

### Starting the Server

To start the server, run:
npm start

The server will start running at `http://localhost:3000`.

### Endpoints

#### GET /tasks

Retrieves all tasks.

#### GET /tasks/:id

Retrieves a single task by its ID.

#### POST /tasks

Creates a new task.

#### PUT /tasks/:id

Updates an existing task by its ID.

#### DELETE /tasks/:id

Deletes a task by its ID.

### Task Schema

A task object has the following schema:

```json
{
  "id": 1,
  "title": "Sample Task",
  "description": "This is a sample task",
  "completed": false
}
```

Input Validation
Input validation is implemented for task creation and updates. The title and description must not be empty, and the completion status must be a boolean value.


