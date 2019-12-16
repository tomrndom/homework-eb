FROM node:12-alpine3.9

WORKDIR /node-app
RUN npm config set registry https://registry.npmjs.org
RUN npm install -g nodemon
RUN npm install -g pm2

COPY package.json /node-app/package.json
RUN npm install

RUN npm cache clean --force 
RUN mv /node-app/node_modules /node_modules
COPY ./server /node-app/server
COPY ./common /node-app/common

EXPOSE 3000

CMD ["pm2-docker","server/server.js"]