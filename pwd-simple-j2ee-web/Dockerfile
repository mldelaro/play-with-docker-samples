FROM tomcat:9-jre8-alpine

# Remove apache tomcat managers
RUN rm -rf $CATALINA_HOME/webapps/*

# Move built *.war project into tomcat directory
COPY ./target/ $CATALINA_HOME/webapps/ROOT