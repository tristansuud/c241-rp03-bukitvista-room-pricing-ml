FROM node:22
WORKDIR /usr/src/app
COPY package*.json ./
RUN apt update && apt install -y netcat-openbsd
RUN npm install
RUN npm i -g sequelize-cli
COPY . .
CMD ["npm", "start"]