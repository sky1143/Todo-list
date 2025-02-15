# To-Do List App

A simple to-do list web application built with **Node.js, Express, PostgreSQL, and EJS**.

## Features
- Add, edit, and delete to-do items.
- Uses PostgreSQL for persistent data storage.
- Express for backend handling.
- EJS for rendering dynamic content.

## Installation

1. **Clone the repository:**
   ```sh
   git clone <your-repo-url>
   cd 5-capstone---todo-list
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Set up the database:**
   - Create a PostgreSQL database.
   - Create a table named `items` with columns:
     ```sql
     CREATE TABLE items (
       id SERIAL PRIMARY KEY,
       title TEXT NOT NULL
     );
     ```
   
4. **Configure environment variables:**
   Create a `.env` file in the project root and add:
   ```env
   PG_USER=your_username
   PG_HOST=your_host
   PG_DATABASE=your_database
   PG_PASSWORD=your_password
   PG_PORT=your_db_port
   ```

## Running the App

1. **Start the server:**
   ```sh
   npm start
   ```

2. **Open in browser:**
   - Visit: `http://localhost:3000`

## Deployment
- Push your code to GitHub.
- Deploy to **Render**:
  - Link your GitHub repository.
  - Set environment variables in Render's settings.
  - Use `npm install` as the build command.
  - Use `npm start` as the start command.

## License
This project is licensed under the ISC License.
