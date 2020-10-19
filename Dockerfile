FROM node:12.18-alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm i

COPY . .

CMD npm start