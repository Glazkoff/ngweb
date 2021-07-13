FROM node:16-alpine
WORKDIR /usr/src/app
COPY .env /usr/src/app/
COPY nodejs_microservice/package.json ./
RUN npm install --quiet 
COPY nodejs_microservice/ .
CMD [ "node", "server.js" ]
EXPOSE 3000