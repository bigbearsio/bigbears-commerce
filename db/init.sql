CREATE DATABASE commerce_core;

CREATE ROLE bigbears WITH LOGIN PASSWORD 'bigbears';
GRANT ALL PRIVILEGES ON DATABASE commerce_core TO bigbears;