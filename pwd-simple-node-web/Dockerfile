FROM node:8-alpine
WORKDIR /usr/src/app
COPY ./package.json ./
RUN npm install

COPY . .
EXPOSE 80
COMD [ "npm", "start"]