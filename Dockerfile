FROM node:alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
RUN npm i -g sequelize-cli
COPY . .
CMD ["npm", "start"]

