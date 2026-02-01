# SmartCode Technology Backend

This dictionary contains the Node.js + Express + MongoDB backend code for the SmartCode Technology website.

## Prerequisites

1.  **Node.js**: You must have Node.js installed to run this. [Download Node.js](https://nodejs.org/)
2.  **MongoDB**: You need a running MongoDB instance. You can use:
    *   [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) (Free Cloud Database)
    *   Local MongoDB Community Server

## Setup Instructions

1.  **Open Terminal** and navigate to this folder:
    ```bash
    cd "c:/Users/camaar/Desktop/scmrt code/backend"
    ```

2.  **Install Dependencies**:
    ```bash
    npm install
    ```

3.  **Configure Environment**:
    Create a file named `.env` in this folder ("backend") and add your MongoDB connection string and a secret key:
    ```
    MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.example.mongodb.net/smartcode_db
    PORT=5000
    JWT_SECRET=my_super_secret_key_123
    ```

4.  **Run Server**:
    ```bash
    npm start
    ```
    Or for development (auto-restart on changes):
    ```bash
    npm run dev
    ```

## API Endpoints

### Authentication
*   **POST** `/api/auth/register`: Create a new Admin User (JSON body: `username`, `email`, `password`)
*   **POST** `/api/auth/login`: Login to get a Token (JSON body: `email`, `password`)

### Projects
*   **GET** `/api/projects`: Fetch all projects (Public)
*   **POST** `/api/projects`: Add a new project (Protected - Requires Header `x-auth-token`: `your_token_here`)

### Contact
*   **POST** `/api/contact`: Send a message (Public)

## Frontend Integration
The frontend `script.js` is already configured to look for this server at `http://localhost:5000`. 
*   If the server is running, the **Projects Page** will load data from MongoDB.
*   If the server is off, it will show the static placeholder projects.
