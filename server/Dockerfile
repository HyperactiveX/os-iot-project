# Install dependencies only when needed
FROM node:alpine AS deps

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD ["node", "index.js"]