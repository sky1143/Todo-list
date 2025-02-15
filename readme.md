# To-Do List App

A simple to-do list web application built with **Node.js, Express, PostgreSQL, and EJS**.

## Features
- Add, edit, and delete to-do items.
- Uses PostgreSQL for persistent data storage.
- Express for backend handling.
- EJS for rendering dynamic content.
- Deployed on **Render** for easy accessibility.

## Installation

### 1. Clone the Repository
```sh
git clone <your-repo-url>
cd 5-capstone---todo-list
```

### 2. Install Dependencies
```sh
npm install
```

### 3. Set Up the Database
- Create a PostgreSQL database.
- Create a table named `items` with the following structure:

```sql
CREATE TABLE items (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL
);
```

### 4. Configure Environment Variables
- Create a `.env` file in the project root and add:

```env
PG_USER=your_username
PG_HOST=your_host
PG_DATABASE=your_database
PG_PASSWORD=your_password
PG_PORT=your_db_port
PORT=3000 # Change if deploying
```

## Running the App Locally

### 1. Start the Server
```sh
npm start
```

### 2. Open in Browser
- Visit: `http://localhost:3000`

## Deployment to Render
### 1. Push Code to GitHub
```sh
git add .
git commit -m "Initial commit"
git push origin main
```

### 2. Deploy on Render
- Go to **Render.com** and create a new **Web Service**.
- Link your GitHub repository.
- Set environment variables in Render’s **Environment Settings**.
- Use `npm install` as the build command.
- Use `npm start` as the start command.
- Deploy and monitor logs for any issues.

## License
This project is licensed under the **ISC License**.
