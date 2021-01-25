# README
## #1 Gems and Packages

- See the README in each directory

## #2 development

```
docker-compose up --build -d
docker-compose run api rails db:migrate:reset
docker-compose run api rails db:seed
```

- Check if Accessable with localhost:8080

```
http://localhost:8080/
```

## #3 Production with nginx in centos8

- Build and attach container with login bash

```
docker-compose -f docker-compose.yml.prod up --build -d
docker-compose -f docker-compose.yml.prod exec web bash -l
```

- Start Nginx

```
# systemctl start nginx
```

- Create and migration db then start api

```
# cd /var/www/api
# rails db:migrate:reset
# rails s
```

- Check if Accessable with localhost:8080

```
http://localhost:8080/
```
