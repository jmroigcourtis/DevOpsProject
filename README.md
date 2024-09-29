# Quick Node app CRUD and MongoDB with Docker

This project uses Docker, Docker Compose, and Node.js (version 18). Follow the instructions below to start the project.

## Requirements


- Docker
- Docker Compose
- Node.js v18
- Nodemon

## Setup

1. Clone the repository locally:
   
   ```bash
   git clone <repo-url>
   cd <repo-folder>
   ```

2. Create a `.env` file in the project's root directory with the following environment variables:

   ```bash
      ME_CONFIG_MONGODB_ADMINUSERNAME=<username>
      ME_CONFIG_MONGODB_ADMINPASSWORD=<pass>
      ME_CONFIG_MONGODB_SERVER=mongo
      ME_CONFIG_MONGODB_URL=mongodb://<user>:<password>@<servicename>:<port>/<db>?authSource=admin
      MONGO_URI=mongodb://<servicename>:<port>/<db>
      MONGO_INITDB_ROOT_USERNAME=<username>
      MONGO_INITDB_ROOT_PASSWORD=<pass>
      MONGO_EXPRESS_PORT=<port:port>
      MONGO_HOST_NAME=mongo
      MONGO_PORT=<port>:<port>
      NODE_SERVICE_PORT=<port>:<port>
      PORT=<port>
   ```

## Start the Project

1. Make sure Docker and Docker Compose are installed.

2. Build and start the containers using Docker Compose:

   ```bash
   docker-compose up --build
   ```

3. The server will be available at `http://localhost:PORT`, Mongo Express at `http://localhost:MONGO_EXPRESS_PORT`, and the database on port `MONGO_PORT`.

## Technologies

- **Node.js** (v18)
- **Nodemon**
- **Docker**
- **Docker Compose**
- **MongoDB**
- **Mongo Express**

## License

This project is licensed under the MIT License.
