Build project:
docker build -t maven-builder .

docker volume create --name pwd-simple-j2ee-mvn-repo
docker run -it -v "$PWD":/pwd-simple-j2ee maven-builder mvn package