###### Base ######
FROM node:12.18.1-stretch-slim AS base

WORKDIR /app

COPY package*.json ./
RUN npm install

# Copy and build client and server together
COPY . /app
RUN npm run-script build

###### Server ######
FROM base AS server

EXPOSE 3000
CMD ["node", "dist/server.js"]

###### Client ######
FROM nginx:1.19.0-alpine AS client

COPY --from=base /app/dist/public /usr/share/nginx/html
EXPOSE 80
