# README

- App deployed at heroku: https://react-tanisyu.herokuapp.com/
- Api deployed at heroku: https://rails-api-tanisyu.herokuapp.com/api/v1/tasks
---

## #1 Gems and Packages

- Ruby: 2.7.1
- Rails: 6.1.0
- PostgreSQL: latest from docker

- react: 17.0.1
- react-redux: 7.2.2

- See the README in each directory for more gems and packages

## #2 Development

```
docker-compose up --build -d
docker-compose exec api rails db:migrate:reset
docker-compose exec api rails db:seed
```

- Check if Accessable with localhost:8080

```
http://localhost:8080/
```

## #3 Test

```
docker-compose up --build -d
docker-compose exec api rails db:migrate:reset RAILS_ENV=test
docker-compose exec api rspec
```

## #4 Production with nginx in centos8

- Build and up containers

```
docker-compose -f docker-compose.yml.production up --build -d
```

- Create and migration db then start api

```
docker-compose -f docker-compose.yml.production exec api /bin/bash -lc "rails db:create"
docker-compose -f docker-compose.yml.production exec api /bin/bash -lc "rails db:migrate"
```

- Check if Accessable with localhost:8080

```
http://localhost:8080/
```

## #5 Deploy to heroku

- Need below Environment Variables in Circle CI and marge to master branch, Automatically build docker image and push to heroku's container repository

```
・For API
$APP_DATABASE_HOST      DB host name
$APP_DATABASE_NAME      DB name
$APP_DATABASE_PASSWORD  DB password
$APP_DATABASE_USERNAME  DB username
$APP_URL                React App URL for CORS setting
$MASTER_KEY             config/master.key

・For React APP
$REACT_APP_API_URL      API URL
$REACT_APP_API_PORT     API port if necessary

・For deploy to heroku
$HEROKU_KEY             Heroku API Key
$USER                   Heroku user name (not Email)
```

- Deoloy with below commands from heroku's container repository

```
heroku container:release -a rails-api-tanisyu web
heroku container:release -a react-tanisyu web
```
