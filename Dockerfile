FROM node:12.2.0-alpine as build
LABEL maintainer="contact@nglazkov.ru"
WORKDIR /theme/src
COPY package*.json /theme/src/
RUN sudo apt-get update && sudo apt install nodejs && sudo apt install npm && npm install -g webpack webpack-cli dir-archiver && npm install
COPY . /theme/src
RUN npm run build --production && npm run bundle && rm -rf /theme/src/node_modules

FROM wordpress:php7.3-fpm
WORKDIR /var/www/html
COPY ./nginx/wp-config.php /var/www/html/wp-config.php
COPY --from=build ./theme/ngwebstudio.zip /var/www/html/wp-content/themes/
RUN apt-get update && apt-get install unzip && mkdir ./wp-content/themes/ngwebstudio && unzip ./wp-content/themes/ngwebstudio.zip -d ./wp-content/themes/ngwebstudio/
EXPOSE 9000

