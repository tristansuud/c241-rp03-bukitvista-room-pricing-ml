FROM node:18

ENV HOST 0.0.0.0

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
EXPOSE 8080
CMD [ "npm", "run", "dev"]