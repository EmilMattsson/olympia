# Olympia

## Getting Started
Install dependencies with your package manager of choice, e.g yarn:
```
yarn install
```
### Database
This service is dependant on MongoDB for storing data so you need to set up your own instance of an MongoDB client and create an .env file in the root folder and set the following variables:
```
DB_USER=<database username>
DB_PASSWORD=<database password>
```

To start the service:
```
yarn run start
```
Service default address is: http://localhost:3000

## Description
This is just a simple REST service for keeping track of one's weight lifting progress. There is no UI to this service, it will probably be a separate service TBC..