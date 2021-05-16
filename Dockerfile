FROM node:12.2.0-alpine as build
LABEL maintainer="contact@nglazkov.ru"
WORKDIR /theme/src
COPY package*.json ./
RUN npm install -g webpack webpack-cli dir-archiver && npm install
COPY . ./
RUN npm run build --production && rm -rf /theme/src/node_modules/*

FROM wordpress:latest as wp
WORKDIR /var/www/html/wp-content/themes/ngwebstudio
COPY --from=build ./theme/src/* /var/www/html/wp-content/themes
WORKDIR /var/www/html
