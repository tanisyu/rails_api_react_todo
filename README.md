# README
## #1 Gems and Packages

- See the README in each directory

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
docker-compose -f docker-compose.yml.production exec api /bin/bash -lc "puma -C config/puma.rb"
```

- Start Nginx

```
docker-compose -f docker-compose.yml.production exec app /bin/bash -lc "systemctl start nginx"
```

- Check if Accessable with localhost:8080

```
http://localhost:8080/
```
