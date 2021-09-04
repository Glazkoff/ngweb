FROM node:12.2.0 as build
LABEL maintainer="contact@nglazkov.ru"
WORKDIR /theme/src
COPY package*.json /theme/src/
RUN  npm install -g webpack webpack-cli dir-archiver && npm install
COPY . /theme/src
RUN npm run build --production && rm -rf /theme/src/node_modules

FROM wordpress:5.8.0-php7.3-fpm
WORKDIR /var/www/html
COPY ./nginx/wp-config.php /var/www/html/wp-config.php
RUN mkdir /var/www/html/wp-content/themes/ngwebstudio
COPY --from=build ./theme/src /var/www/html/wp-content/themes/ngwebstudio
EXPOSE 9000