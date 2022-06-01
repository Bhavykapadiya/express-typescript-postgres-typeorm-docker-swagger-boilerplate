# express-typescript-postgres-typeorm-docker-swagger-boilerplate
This is boilerplate of express, typescript and postgreSql with typeorm and docker based setup

## ❯ Getting Started

### Step 1: Set up the Development Environment

You need to set up your development environment before you can do anything.

Install [Node.js and NPM](https://nodejs.org/en/download/)

Install a postgreSQL database.

### Step 2: Create new Project

Clone this project.

Then set `devlopment.env` as a `.env` for that fire this command "export NODE_ENV=development"`. In this file you have to add your database connection information.

Create a new database with the name you have in your `.env`-file.

Then setup your application environment. (With "npm i" command)

> This installs all dependencies with npm. After that it migrates the database and seeds some test data into it. So after that your development environment is ready to use.

Here, if want to run DB from docker than follow the step as below
Step 1: install [docker & docker-compose on your machine](https://docs.docker.com/compose/install/)
Step 2: Then give permission to you current machine docker to run without sudo (command : sudo chmod 666 /var/run/docker.sock)
Step 3: Run docker (docker-compose up -d) (Here, I have already set docker-compose.yml file with postgreSql and cuurent project deployed on docker with 8000 port)
Step 4: To check docker is working proper (command: Command: docker ps -a)
Step 5: Check for particular docker container (command: docker logs -f <NAMES>)  --- NAMES = Container name
Now move on to Project architecture side,

### Step 3: Serve your App

Go to the project directory and start your app with this npm script.

```bash
npm run dev
```

> This starts a local server using `nodemon`, which will watch for any file changes and will restart the sever according to these changes.
> The server address will be displayed to you as `http://0.0.0.0:9001`. ( this command set for nodemon and typescript build commnad both working as parallely)

Then project run successfully on port 9001
Here, I have already set swagger.json file with all route set on swaggger

For swagger 
Swagger documentation path: "http://localhost:9001/docs/"

Here, you find all this api with method and route config.

Two basic api for check server and Db work proper or not?
1) GET: http://localhost:9001/health-check
2) GET: http://localhost:9001/server-check

NOTE: ALL API RESPONSE FORMAT IS :
`{
    "success": true,
    "httpStatusCode": 200,
    "message": "Hello World perro",
    "data": {id: 1, name: "perro"} // Data could be anything
}`
