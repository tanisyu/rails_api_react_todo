## #1 prepare database

```
cd api
docker-compose run web rails db:create
docker-compose run web rails db:migrate
```
