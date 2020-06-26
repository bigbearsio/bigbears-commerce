FROM node:12.18.1-stretch-slim

# Install Prerequisite needed by Native Node Modules
RUN apt-get -qy update && apt-get -qy install openssl && apt-get clean
  
# App
WORKDIR /app

# Copy and build client and server together
COPY . /app
RUN npm install
RUN npm run-script build

# Entrypoint
EXPOSE 3000

ENTRYPOINT [ "node", "dist/server.js" ]
