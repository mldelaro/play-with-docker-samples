FROM maven:3.6.0-alpine as builder
COPY ./ ./pwd-simple-j2ee
WORKDIR ./pwd-simple-j2ee
RUN mvn package