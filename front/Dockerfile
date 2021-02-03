FROM node:14-alpine  
WORKDIR /usr/src/app

ARG REACT_APP_API_URL="http://localhost:3000"
ENV REACT_APP_API_URL $REACT_APP_API_URL

RUN apk add bash

COPY app/package.json .
COPY app/yarn.lock .
RUN yarn install

COPY ./app .

EXPOSE 8080

CMD serve -s build
