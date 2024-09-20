# DevOps Project

This project uses Docker, Docker Compose, and Node.js (version 18). Follow the instructions below to start the project.

## Requirements

- Docker
- Docker Compose
- Node.js v18

## Setup

1. Clone the repository locally:
   
   ```bash
   git clone <repo-url>
   cd <repo-folder>
   ```

2. Create a `.env` file in the project's root directory with the following environment variables:

   ```bash
   ME_CONFIG_MONGODB_ADMINUSERNAME=<admin-username>
   ME_CONFIG_MONGODB_ADMINPASSWORD=<admin-password>
   MONGO_INITDB_ROOT_USERNAME=<root-username>
   MONGO_INITDB_ROOT_PASSWORD=<root-password>
   ME_CONFIG_MONGODB_URL=mongodb://<user>:<password>@<mongoport>/local?<options>
   ME_CONFIG_MONGODB_SERVER=mongo
   MONGO_PORT=27017:27017
   MONGO_EXPRESS_PORT=8081:8081
   PORT=3006
   ```

## Start the Project

1. Make sure Docker and Docker Compose are installed.

2. Build and start the containers using Docker Compose:

   ```bash
   docker-compose up --build
   ```

3. The server will be available at `http://localhost:3006`, Mongo Express at `http://localhost:8081`, and the database on port `27017`.

## Technologies

- **Node.js** (v18)
- **Docker**
- **Docker Compose**
- **MongoDB**
- **Mongo Express**

## License

This project is licensed under the MIT License.
