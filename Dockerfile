FROM node:12.18.1-stretch-slim
  
# App
WORKDIR /app

COPY package*.json ./
RUN npm install

# Copy and build client and server together
COPY . /app
RUN npm run-script build

# Entrypoint
EXPOSE 3000

ENTRYPOINT [ "node", "dist/server.js" ]