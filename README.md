## Features:
- User authentication and role-based authorization.
- The app is deployed at https://reading-recommendations.onrender.com/health
- Postgres DB is hosted at Neon.


## Prerequisites

- Node.js
- PostgreSQL

## Installation

- Clone the repository
- Install the dependencies:
    ```
    npm install
    ```
- Create a .env.development file with the following content:
    >DB_HOST=localhost
    >DB_USER=myuser
    >DB_PASSWORD=mypassword
    >DB_NAME=mydatabase
    >DB_PORT=5432
- To start in development mode:
    ```
    npm run dev
    ```
- Access the APIs at:
    ```
    http://localhost:3000/v1/api/
    ```
    
## Testing
- Running the test:
    ```
    npm test
    ```
