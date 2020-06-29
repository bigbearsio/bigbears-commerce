# BigBears Commerce App
![Build](https://github.com/bigbearsio/bigbears-commerce/workflows/Build/badge.svg?branch=master)

## Objectives
BigBears-Commerce App is a minimalist headless ecommerce solution with following features:
- allowing merchant to manage their inventory
- allowing merchant to distributes product to multiple channel
  - Facebook (launch with v1)
  - Instagram (launch with v2)
  - Google Shopping (launch with v2)
  - Shopee (Planning)
  - Lazada (Planning)
  - Amazon
- allowing merchant to manage order with built-in order management

## Roadmap
- allowing merchant to distributes product to multiple channel
  - Instagram (launch with v2)
  - Google Shopping (launch with v2)
  - Shopee (Planning)
  - Lazada (Planning)
  - Amazon
- allowing merchant to manage shipment within order management
- allowing merchant to communicate with buyers using Messenger

## Prerequisite
* NodeJS 12.18 and Up `brew install node`
* Docker 

### Docker - Build
This will start PostgresDB at port 8432, for development

The database is initialized only once at startup via a script in `db/init.sql`.
If the script is changed. Delete the existing database container with `docker-compose rm` before start it up again.

```
docker-compose up -d
```

### Install Dependencies & test
```
npm install
npm test
```


### Client - Run
```
cd src/client
npm start
```

it should open browser at http://localhost:8080

### Server - Run
Prerequisite:
add `.env` file to ROOT directory and add following data to `/.env`

```
OPEN_CAGE_DATA_KEY=8c0892514e884f09af7c09a9b067b02b
```

Run && Build:
```
cd src/server

// run dev server
npm run dev

```
it should open browser at http://localhost:3000/api/v1/search?q=bangkok which return json data.

### Prisma Client

Add configuration in .env file in prisma directory

```
DATABASE_URL="postgresql://user:password@localhost:5432/commerce_core?schema=public"
```

```
dotenv -e .env npx prisma introspect
```
