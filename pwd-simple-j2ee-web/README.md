Mount maven repo:

docker volume create --name pwd-simple-j2ee-mvn-repo
docker run -it -v pwd-simple-j2ee-mvn-repo:/pwd-simple-j2ee mymaven package

docker build .