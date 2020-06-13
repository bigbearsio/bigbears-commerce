# BigBears Commerce App
BigBears-Commerce App is a minimalist headless ecommerce solution allowing

## Prerequisite
* NodeJS 12.18 and Up `brew install node`
* Docker 

### Docker - Build
This will start PostgresDB at port 8432, for development

```
docker-compose up -d
```

### Client - Build
```
cd src/client

// Install Deps
npm install

// run dev server
npm start

// build
npm build
```

it should open browser at http://localhost:8080

### Server - Build
Prerequisite:
add `.env` file to ROOT directory and add following data to `/.env`

```
OPEN_CAGE_DATA_KEY=8c0892514e884f09af7c09a9b067b02b
```
Run && Build:
```
cd src/server

// Install Deps
npm install

// run dev server
npm run dev

// build 
npm build

```
it should open browser at http://localhost:3000/api/v1/search?q=bangkok which return json data.