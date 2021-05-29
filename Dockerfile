FROM node:12.2.0-alpine as build
LABEL maintainer="contact@nglazkov.ru"
WORKDIR /theme/src
COPY package*.json /theme/src/
RUN npm install -g webpack webpack-cli dir-archiver && npm install
COPY . /theme/src
RUN npm run build --production && npm run bundle && rm -rf /theme/src/node_modules

FROM wordpress:latest
WORKDIR /var/www/html
COPY --from=build ./theme/src/* /var/www/html/wp-content/themes/ngwebstudio/
COPY --from=build ./theme/ngwebstudio.zip /var/www/html/wp-content/themes/
