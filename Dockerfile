FROM maven:3.6.0-alpine as builder
WORKDIR ./pwd-simple-j2ee
COPY ./ ./pwd-simple-j2ee
RUN mvn package