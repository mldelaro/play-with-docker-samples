FROM maven:3.6.0-alpine as builder
COPY ./ /
RUN mvn package

FROM tomcat:9-jre8-alpine
RUN rm -rf $CATALINA_HOME/webapps/*
COPY --from=builder ./target/*.war $CATALINA_HOME/webapps/