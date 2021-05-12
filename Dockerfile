FROM node:12.2.0-alpine as build
LABEL maintainer="contact@nglazkov.ru"
WORKDIR /theme
COPY package*.json ./
RUN npm install -g webpack webpack-cli dir-archiver && npm install
COPY . ./
RUN npm run build --production && npm run bundle && rm -rf /var/www/html/wp-content/themes/ngwebstudio/node_modules/*

FROM  wordpress:latest
WORKDIR /var/www/html/wp-content/themes/ngwebstudio
COPY --from=build ./theme/* /var/www/html/wp-content/themes/ngwebstudio
ENV WORDPRESS_DB_HOST=db:3306
ENV WORDPRESS_DB_USER=wordpress
ENV WORDPRESS_DB_PASSWORD=wordpress
ENV WORDPRESS_TABLE_PREFIX="wp_"
