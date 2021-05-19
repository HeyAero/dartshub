docker-compose -f docker-compose.yaml -f docker-compose.dev.yaml up
docker-compose exec api python api/manage.py makemigrations
docker-compose exec api python api/manage.py migrate