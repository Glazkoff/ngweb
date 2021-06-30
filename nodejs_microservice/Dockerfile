FROM node:16-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --quiet
COPY . .
CMD [ "node", "server.js" ]
EXPOSE 3000