# Service Book Store
This is a service for Book Store Application

## Features
- Registry
- Login
- Keep Login Session Alive
- Get Books in a Category
- Get New Books
- Dashboard for managing users
- Dashboard for managing books

## Demo
```bash
https://nestjs-bookstore.onrender.com/api-docs
```

## Installation

Install with npm
```bash
    npm install
```

**Note** using Nodejs Version `18.12.0`

## Environment Variables
To config the environment variable of service, we need to edti the config.yaml at the root of server folder

```bash
NODE_ENV: 'development'     # Environment we run the application (e.g, "development" or "production")

SERVER:
  PORT: 3000                # The port the service run on
  JWT:
    SECRET: 'secret'        # The secret key of JWT
    EXPIRES_IN: 86400       # The time to live of token

DATABASE:
  POSTGRES:
    HOST: 'localhost'       # The host or ip of database
    PORT: 5432              # The port of database
    DATABASE: 'postgres'    # The name of database
    SCHEMA: 'bookstore'     # The schema of database that we use
    USERNAME: 'postgres'    # The username to authenticate
    PASSWORD: '123456'      # The password to authenticate
    SSL: false              # Something, to connect to database we need to turn on SSL
    SYNCHRONIZE: true       # Do we want to init database schema
```

## Run Locally

#### Step 1: Set Up Database
**Using Docker**
```bash
  docker pull postgres
  docker run --name my-postgres -d -p 5432:5432 -e POSTGRES_PASSWORD=123456 postgres
```
**Not Using Docker**
Access the link and downkload postgresql version 15.2, then install it
(https://www.enterprisedb.com/downloads/postgres-postgresql-downloads)

#### Step 2: Start Application
Go to the project directory
```bash
  npm run start:dev
```
## Running Tests

To run tests, run the following command

```bash
  npm run lint
```
