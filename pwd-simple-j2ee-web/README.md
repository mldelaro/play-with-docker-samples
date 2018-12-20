Mount maven repo:

docker volume create --name pwd-simple-j2ee-mvn-repo
docker run -it -v "$PWD":/pwd-simple-j2ee mymaven mvn package

docker build .

docker-compose up