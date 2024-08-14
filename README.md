#Aplicação Web de Receitas
Para roda-la apenas execute o comando docker compose up

O arquivo docker compose foi feito para subistituir os seguintes comandos para inicializar a aplicação dockerizada

docker build -t recipebook .

docker network create food_network 

docker run -dp 3000:3000 --name Recipe_book --network food_network recipebook


docker run -d \
  -p 5432:5432 \
  --name recipebook_db \
  -e POSTGRES_USER=recipeadmin \
  -e POSTGRES_PASSWORD=1q2w3e4r \
  -e POSTGRES_DB=recipebookdb \
  --network food_network \
  -v recipebook_vol:/var/lib/postgresql/data \
  -v /Users/iagocampista/Documents/Projects/RecipeBook/RecipeBook/init.sql:/docker-entrypoint-initdb.d/init.sql \
  postgres



--- sem inicializar o banco de dados
docker container run -d -p 5432:5432 --name recipebook_db -e POSTGRES_USER=recipeadmin -e POSTGRES_PASSWORD=1q2w3e4r -e POSTGRES_DB=recipebookdb --network food_network -v recipebook_vol:/var/lib/postgresql/data postgres


docker run -d -p 8080:80 --name pg_admin_f -e PGADMIN_USER=iagocampista@gmail.com -e PGADMIN_PASSWORD=1q2w3e4r -e PGADMIN_DEFAULT_EMAIL=iagocampista@gmail.com -e PGADMIN_DEFAULT_PASSWORD=1q2w3e4r --network food_network dpage/pgadmin4