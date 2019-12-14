FROM node:10.8

RUN mkdir -p /app
WORKDIR /app
RUN npm config set registry https://registry.npmjs.org
RUN npm install -g nodemon
RUN npm install -g pm2

COPY package.json /app/package.json
RUN npm install

RUN npm cache clean --force 
RUN mv /app/node_modules /node_modules
COPY ./server /app/server
COPY ./common /app/common

EXPOSE 3000

CMD ["pm2-docker","server/server.js"]