FROM node:14-alpine  
WORKDIR /usr/src/app

RUN apk add bash

COPY app/package.json .
COPY app/yarn.lock .
RUN yarn install

COPY ./app .

EXPOSE 8080

CMD yarn start
