# Install dependencies only when needed
FROM node:alpine AS deps

WORKDIR /app

COPY package*.json ./

RUN apk add --no-cache --virtual .gyp python2 python3 make g++ \
    && npm install \
    && apk del .gyp

COPY . .

EXPOSE 8080

CMD ["node", "./src/index.js"]